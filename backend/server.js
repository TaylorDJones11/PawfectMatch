require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const conn = require('./db/conn');
const animalsRouter = require('./routes/animals');
const authRoutes = require('./routes/auth');

// CORS setup
app.use(cors());

// Initialize MongoDB connection

// MIDDLEWARE
app.use(express.json());

// API ROUTES
app.use('/api', authRoutes);
app.use('/api', animalsRouter);

// Serve static files
app.use('/public', express.static('public'));

// Start the server
// Function to start the server
async function startServer() {
  try {
    await conn(); // Connect to MongoDB
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}

// Start the server
startServer();
