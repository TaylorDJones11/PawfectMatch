require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const conn = require('./db/conn');
const animalsRouter = require('./routes/animals');

// Enable CORS for all routes
app.use(cors());

// Initialize MongoDB connection
conn();

// MIDDLEWARE
app.use(express.json()); // Parse JSON bodies

// API ROUTES
app.use('/api', animalsRouter); // Use animals router for API routes

// Serve static files
app.use('/public', express.static('public'));

// ROUTES
// Basic welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Pet Adoption Center!');
});

app.get('/animals', async (req, res) => {
  try {
    const Animal = require('./models/Animal');
    const adoptablePets = require('./db/pet'); // Sample pets data

    await Animal.deleteMany({}); // Clear the collection
    console.log('Cleared Pet collection.');

    const createdPets = await Animal.create(adoptablePets); // Seed the database with initial data
    res.json(createdPets); // Return the created pets
  } catch (error) {
    console.error('Error loading seed data:', error);
    res
      .status(500)
      .send(`Something went wrong with loading seed data: ${error.message}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
