const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 50 },
  breed: { type: String, required: true, minlength: 2, maxlength: 50 },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true, min: 0 },
  photos: {
    type: [String], // Array of strings to store multiple image URLs
    validate: {
      validator: function (v) {
        return v.every((url) =>
          /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(url)
        );
      },
      message: (props) => `One or more image URLs are not valid!`,
    },
  },
  description: { type: String, required: true, minlength: 10, maxlength: 500 },
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
