const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  color: {
    type: String,
    default: "from-[#2A2A2A] to-[#1A1A1A]"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);

