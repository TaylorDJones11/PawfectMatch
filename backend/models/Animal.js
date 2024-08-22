const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  title: String,
  imageSrc: String,
  description: String,
  buttonText: String,
  buttonLink: String,
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
