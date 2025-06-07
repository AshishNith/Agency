const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    image: String,
    link: String,
    agency: String,
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'archived'],
        default: 'active'
    },
})

module.exports = mongoose.model("project",projectSchema);

