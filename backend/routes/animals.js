const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');
const authenticateToken = require('../middleware/authenticateToken');

// POST route to create a new animal
router.post('/animals', authenticateToken, async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);
    const savedAnimal = await newAnimal.save();
    res.status(201).json(savedAnimal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET route to fetch all animals
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

// PUT route to update an animal
router.put('/animals/:id', authenticateToken, async (req, res) => {
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        age: req.body.age,
        weight: req.body.weight,
        breed: req.body.breed,
      },
      { new: true }
    );
    res.json(updatedAnimal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE route to delete an animal
router.delete('/animals/:id', authenticateToken, async (req, res) => {
  try {
    const deletedAnimal = await Animal.findByIdAndDelete(req.params.id);
    res.json(deletedAnimal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
