const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors({
  origin: ['https://goran-ai.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));

// Single static file serving
app.use(express.static('public'));

// API fallback
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Root route
app.get('/', (req, res) => {
  res.status(200).send('Backend is running');
});

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something broke!',
    message: err.message
  });
});

module.exports = app;