const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');
const authenticateToken = require('../middleware/authenticateToken');
const { upload, s3, DeleteObjectCommand } = require('../s3');

// POST route to create a new animal with photos
router.post(
  '/animals',
  authenticateToken,
  upload.array('photos', 10),
  async (req, res) => {
    try {
      const photos = req.files.map((file) => file.location);
      const { title, description, age, gender, weight, breed } = req.body;

      const newAnimal = new Animal({
        title,
        description,
        age,
        gender,
        weight,
        breed,
        photos, // Store S3 URLs in MongoDB
      });

      const savedAnimal = await newAnimal.save();
      res.status(201).json(savedAnimal);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

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
router.put(
  '/animals/:id',
  authenticateToken,
  upload.array('photos', 10),
  async (req, res) => {
    try {
      const photos = req.files.map((file) => file.location); // Get new S3 URLs
      const { title, description, gender, age, weight, breed } = req.body;

      const updatedAnimal = await Animal.findByIdAndUpdate(
        req.params.id,
        {
          title,
          description,
          age,
          gender,
          weight,
          breed,
          $push: { photos: { $each: photos } }, // Add new photos to the existing array
        },
        { new: true }
      );

      res.json(updatedAnimal);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

// DELETE route to delete an animal
router.delete('/animals/:id', authenticateToken, async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) return res.status(404).json({ error: 'Animal not found' });

    // Delete photos from S3
    if (animal.photos && animal.photos.length > 0) {
      await Promise.all(
        animal.photos.map(async (url) => {
          try {
            const key = url.split('/').pop(); // Extract the file name from the URL
            console.log('Attempting to delete S3 object with key:', key); // Debugging log

            const command = new DeleteObjectCommand({
              Bucket: process.env.BUCKET_NAME,
              Key: key,
            });

            await s3.send(command);
          } catch (s3Error) {
            console.error('Error deleting photo from S3:', s3Error);
            throw new Error('Failed to delete photo from S3');
          }
        })
      );
    }

    // Delete the animal from MongoDB using findByIdAndDelete
    await Animal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Animal and its photos deleted successfully' });
  } catch (error) {
    console.error('Error deleting animal:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
