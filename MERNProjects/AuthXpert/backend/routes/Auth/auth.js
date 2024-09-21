const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/User.js'); //Import User model
const { signupValidation, loginValidation } = require('../../validation/user.validation.js');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'abcde12345';

//signup Route
router.post('/signup', async (req, res) => {
  console.log('Going first');

  try {
    //validate input using Zod
    console.log('Validation');
    const validation = signupValidation.safeParse(req.body);


    if (!validation.success) {
      return res.status(400).json({ error: validation.error.errors });
    }

    const { name, email, password } = req.body;

    //check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });

    }
    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });

  } catch (error) {
    console.log('Hitting here');

    res.status(500).json({ error: 'Internal server error' });
  }
});

//Login Route
router.post('/login', async (req, res) => {
  try {
    //validate input using zod
    const validation = loginValidation.safeParse(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.error.errors });
    }
    const { email, password } = req.body;

    //Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    //compare passwords 
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    //Generate JWT
    const token = jwt.sign({ id: user._id, roles: user.roles }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successfully',
      token: token
    });



  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = router;




