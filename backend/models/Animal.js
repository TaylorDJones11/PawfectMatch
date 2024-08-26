const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 50 },
  breed: { type: String, required: true, minlength: 2, maxlength: 50 },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true, min: 0 },
  imageSrc: {
    type: String,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(v); // Basic regex for URL validation
      },
      message: (props) => `${props.value} is not a valid image URL!`,
    },
    // : [true, 'Animal image URL required'],
  },
  description: { type: String, required: true, minlength: 10, maxlength: 500 },
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
