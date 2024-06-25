const express = require('express');
require('dotenv').config(); // Load environment variables securely
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signupRouter = express.Router(); // Use descriptive names
const loginRouter = express.Router();

const userModel = require('../models/Users.model');

signupRouter.post('/signup', async (req, res) => {
  try {
    // Validate user input (e.g., name length, password strength)
    if (!req.body.name || req.body.name.length < 3) {
      return res.status(400).json({ message: 'Name is required and must be at least 3 characters long' });
    }

    const existingUser = await userModel.findOne({ name: req.body.name });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Securely hash password

    const newUser = new userModel({
      name: req.body.name,
      password: hashedPassword,
    });

    await newUser.save(); // Use mongoose save method

    const accessToken = jwt.sign({ _id: newUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' }); // Use user ID for token payload and set expiration time

    res.status(201).json({ message: "Signup successful", accessToken }); // Send only necessary data
  } catch (err) {
    console.error(err); // Log errors for debugging
    res.status(500).json({ message: 'Internal Server Error' }); // Generic error message for security
  }
});

loginRouter.post('/login', async (req, res) => {
  try {
    const user = await userModel.findOne({ name: req.body.name });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' }); // Use more generic message for security
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const accessToken = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' }); // Use user ID for token payload and set expiration time

    res.json({ accessToken }); // Send only necessary data
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = { loginRouter, signupRouter }; // Use descriptive names and separate routers for better organization
