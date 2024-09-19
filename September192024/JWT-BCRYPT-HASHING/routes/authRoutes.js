const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const { validateUser } = require('../utils/validate.js');

const jwt_secret = 'hello123';

const app = express();

//Register route
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  //Validate user input
  const validation = validateUser({ email, password });
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors });
  }

  //check if user already exists
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({ error: 'user already exists' });
  }

  //Hash the password

  const hashedPassword = await bcrypt.hash(password, 10);

  //save the user
  const newUser = new User({ email, password: hashedPassword });

  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
});

//Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  //Validate user input
  const validation = validateUser({ email, password });
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors });
  }

  //Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  //Compare the password
  const isMatch = jwt.sign({ id: user._id }, jwt_secret, { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successfully', token });
})


module.exports = router;