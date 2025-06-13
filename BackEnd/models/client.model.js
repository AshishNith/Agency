const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Validate base64 image string
                return /^data:image\/(png|jpg|jpeg);base64,/.test(v);
            },
            message: props => 'Invalid base64 image format. Must be PNG or JPEG/JPG'
        }
    },
    industry: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'inactive']
    },
    location: {
        type: String,
        required: true
    },
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

