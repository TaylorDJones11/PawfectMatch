require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const conn = require('./db/conn');
const animalsRouter = require('./routes/animals'); // Assuming this handles fetching animal data

// Initialize MongoDB connection
conn();

// MIDDLEWARE
app.use(express.json()); // Parse JSON bodies

// API ROUTES
app.use('/api', animalsRouter); // Use animals router for API routes

// Serve static files (e.g., your React app)
app.use(express.static('public')); // Serve your frontend from the 'public' directory

// ROUTES
// Basic welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Pet Adoption Center!');
});

// Seed route for initializing database with predefined pets
app.get('/animals', async (req, res) => {
  try {
    const Animal = require('./models/Animal'); // Ensure this is only required where needed
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
