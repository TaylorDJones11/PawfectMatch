const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');

router.get('/animals', async (req, res) => {
  try {
    const animals = await Animal.find({});
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single animal by ID
router.get('/animals/:id', async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ error: 'Animal not found' });
    }
    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// POST endpoint to add a new animal
router.post('/animals', async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);
    const savedAnimal = await newAnimal.save();
    res.status(201).json(savedAnimal);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

module.exports = router;
