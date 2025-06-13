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
  link: {
    type: String
  },
  agency: {
    type: String
  },
  status: {
    type: String,
    default: 'active'
  },
  tags: [{
    type: String
  }],
  color: {
    type: String,
    default: "from-[#2A2A2A] to-[#1A1A1A]"
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add virtual for id
projectSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

module.exports = mongoose.model('Project', projectSchema);

