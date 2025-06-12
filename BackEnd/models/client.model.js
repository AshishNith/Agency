const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: String,
    industry: String,
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive']
    },
    location: String,
    projectCount: {
        type: Number,
        default: 0
    }
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Add virtual for id
clientSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

module.exports = mongoose.model("client", clientSchema);

