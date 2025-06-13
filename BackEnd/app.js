const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors(
  {
    origin: ['http://localhost:5174','https://agency-bo1b.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));


app.get('/', (req, res) => {
    res.send('Backend is Up and Running ! ');
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