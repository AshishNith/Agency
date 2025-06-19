const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

// Context for the chatbot about the agency
const agencyContext = {
  name: "GoRan ",
  services: [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "Brand Strategy",
    "Mobile App Development"
  ],
  expertise: "We specialize in creating digital experiences that combine innovative design with cutting-edge technology",
  location: "Global, with offices in major tech hubs",
  experience: "12+ years in digital innovation",
  approach: "We take a client-first approach, focusing on delivering measurable results through creative solutions"
};

// System prompt to guide AI responses
const systemPrompt = `You are the AI assistant for ${agencyContext.name}. 
Your role is to be helpful, professional, and knowledgeable about our services and expertise.

Format your responses using these rules:
1. Use **bold** for emphasis (wrap important terms in double asterisks)
2. Use line breaks to separate paragraphs
3. Keep paragraphs short and focused
4. Use bullet points for lists

Key points about our agency:
- ${agencyContext.expertise}
- We offer: ${agencyContext.services.join(', ')}
- ${agencyContext.experience}
- ${agencyContext.approach}

Information about the Founders:
- **Ashish Ranjan**: CEO & Co-Founder, technical head
- **Atharv Golait**: CFO & Co-Founder, Expert in AI, finance and operations

Response Guidelines:
1. Be professional but friendly
2. Structure responses with clear paragraphs
3. Highlight key terms in **bold**
4. Use bullet points for listing services or features
5. Keep responses concise but informative
6. Try to be short, concise, and informative
7. Give to the point answers, avoid unnecessary details`

// Chat history directory
const HISTORY_DIR = path.join(__dirname, '..', 'data', 'chat-history');

// Ensure history directory exists
async function ensureHistoryDir() {
  try {
    await fs.access(HISTORY_DIR);
  } catch {
    await fs.mkdir(HISTORY_DIR, { recursive: true });
  }
}

// File operations for chat history
async function saveHistory(sessionId, messages) {
  await ensureHistoryDir();
  const filePath = path.join(HISTORY_DIR, `${sessionId}.json`);
  await fs.writeFile(filePath, JSON.stringify({
    sessionId,
    messages,
    lastInteraction: new Date()
  }, null, 2));
}

async function getHistory(sessionId) {
  try {
    const filePath = path.join(HISTORY_DIR, `${sessionId}.json`);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return null;
  }
}

// Helper function to get or create chat history
async function getOrCreateChatHistory(sessionId) {
  let history = await getHistory(sessionId);
  
  if (!history) {
    history = {
      sessionId,
      messages: [{ role: 'system', content: systemPrompt }],
      lastInteraction: new Date()
    };
    await saveHistory(sessionId, history.messages);
  }
  return history;
}

// Remove or update the test GET route
router.get('/', (req, res) => {
    res.send('Chat API is working!');
});

// Updated POST route with file-based history
router.post('/', async (req, res) => {
  const { message, sessionId = Date.now().toString() } = req.body;

  try {
    const history = await getOrCreateChatHistory(sessionId);
    history.messages.push({ role: 'user', content: message });
    
    // Prepare messages for API call (last 10 messages for context)
    const contextMessages = history.messages.slice(-10).map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'meta-llama/llama-3.3-8b-instruct:free',
        messages: contextMessages,
        temperature: 0.7,
        max_tokens: 500,
        frequency_penalty: 0.5,
        presence_penalty: 0.3
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices[0].message.content.trim();

    // Save assistant's reply to history
    history.messages.push({ role: 'assistant', content: reply });
    await saveHistory(sessionId, history.messages);

    res.json({ 
      reply,
      sessionId,
      historyLength: history.messages.length
    });
  } catch (error) {
    console.error('Chat error:', error.message);
    res.status(500).json({ 
      reply: 'Sorry, something went wrong.',
      error: error.message 
    });
  }
});

// Updated history route
router.get('/history/:sessionId', async (req, res) => {
  try {
    const history = await getHistory(req.params.sessionId);
    if (!history) {
      return res.status(404).json({ error: 'Chat history not found' });
    }
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add cleanup route for old histories
router.delete('/cleanup', async (req, res) => {
  try {
    const files = await fs.readdir(HISTORY_DIR);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    let deletedCount = 0;
    
    for (const file of files) {
      const filePath = path.join(HISTORY_DIR, file);
      const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
      
      if (new Date(data.lastInteraction) < thirtyDaysAgo) {
        await fs.unlink(filePath);
        deletedCount++;
      }
    }

    res.json({
      message: `Deleted ${deletedCount} old chat histories`,
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

