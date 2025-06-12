const Client = require("../models/client.model")

exports.getClients = async (req, res)  => {
    try {
        const clients = await Client.find().lean().sort({ createdAt: -1 });
        // Transform _id to id for frontend compatibility
        const transformedClients = clients.map(client => ({
            ...client,
            id: client._id
        }));
        res.json(transformedClients);
    }
    catch (err) {
        console.error("Error fetching clients:", err);
        res.status(500).json({"error":err.message});
    }
}

exports.createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    console.error("Error creating client:", err);
    res.status(400).json({ error: err.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedClient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await Client.findByIdAndDelete(id);
    if (!deletedClient) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};