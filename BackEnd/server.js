const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Update MongoDB connection options
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    retryWrites: true,
    w: 'majority'
};

mongoose.connect(MONGO_URI, mongooseOptions)
.then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
    });
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection:', err);
    process.exit(1);
});

// Add graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Performing graceful shutdown');
  mongoose.connection.close();
  process.exit(0);
});
