const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const originUrl = process.env.ORIGIN_URL 

const app = express();


app.use(cors({
  origin: originUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/codewavechat", require("./routes/CodeWaveRoute"));


app.get('/', (req, res) => {
  res.status(200).send('Backend is running');
});



module.exports = app;