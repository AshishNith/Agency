const express = require('express');
const router = express.Router();
const { Groq } = require('groq-sdk');
require('dotenv').config();

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

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
7. Give to the point answers, avoid unnecessary details`;

router.get('/', (req, res) => {
  res.send('Groq Chat API is working!');
});

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await groq.chat.completions.create({
      model: 'llama3-70b-8192',
      messages: [
        { role: 'system', content: systemPrompt },
        { 
          role: 'assistant', 
          content: 'I am ready to help. I will format responses with **bold** text for emphasis and clear paragraphs.' 
        },
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const reply = response.choices[0]?.message?.content?.trim() || 'Sorry, I did not understand that.';
    res.json({ reply });

  } catch (error) {
    console.error('Groq API error:', error.message);
    res.status(500).json({ reply: 'Sorry, something went wrong while processing your message.' });
  }
});

module.exports = router;
