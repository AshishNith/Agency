const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));


app.get('/', (req, res) => {
    res.send('Backend is Up and Running ! ');
});

module.exports = app;