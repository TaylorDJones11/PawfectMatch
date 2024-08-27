const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Hard-coded credentials for testing
const hardCodedUsername = 'admin';
const hardCodedPassword = 'password123';

// Login route
router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the provided credentials match the hardcoded ones
    if (username === hardCodedUsername && password === hardCodedPassword) {
      // Generate a JWT
      const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      // Return the token to the client
      return res.json({ token });
    } else {
      // If credentials are incorrect, return an error
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
