const express = require('express');
const router = express.Router();
const axios = require('axios');
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

// Remove or update the test GET route
router.get('/', (req, res) => {
    res.send('Chat API is working!');
});

// Add the chat POST route
router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        // model: 'deepseek/deepseek-r1-0528:free',
        model: 'meta-llama/llama-3.3-8b-instruct:free',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'assistant', 
            content: 'I am ready to help. I will format responses with **bold** text for emphasis and clear paragraphs.' 
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500,
        frequency_penalty: 0.5, // Adds variety to responses
        presence_penalty: 0.3   // Encourages focusing on different topics
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.choices[0].message.content.trim();
    res.json({ reply });
  } catch (error) {
    console.error('OpenRouter API error:', error.message);
    res.status(500).json({ reply: 'Sorry, something went wrong while processing your message.' });
  }
});

module.exports = router;

