const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name:String,
    logo:String
})

module.exports = mongoose.model("client",clientSchema);

