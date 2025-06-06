const client = require("../models/client.model")

exports.getClients = async (req, res)  => {
    try {
        clients = await client.find();
        res.json(clients)
    }
    catch (err) {
        res.status(500).json({"error":err.message})
    }
}

exports.createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};