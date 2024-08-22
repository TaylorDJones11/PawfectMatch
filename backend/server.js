require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const conn = require('./db/conn');
const petRoutes = require('./routes/pets');
const Pet = require('./models/pet');
const adoptablePets = require('./db/pet');

conn();

// MIDDLEWARE
app.use(express.json());

// API ROUTES
app.use('/api/adoptionpets', petRoutes);

// Serve static files (e.g., your React app)
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Pet Adoption');
});

app.get('/seed', async (req, res) => {
  try {
    await Pet.deleteMany({});
    console.log('Cleared Pet collection.');
    await Pet.create(adoptablePets);

    res.json(adoptablePets);
  } catch (error) {
    console.error('Error loading seed data:', error);
    res
      .status(500)
      .send(`Something went wrong with loading seed data: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
