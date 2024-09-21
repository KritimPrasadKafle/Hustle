const bcrypt = require('bcrypt');
const e = require('express');
const jwt = require('jsonwebtoken');

//Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  //Hash Password
  const hashedPassword = await bcrypt.hash(password);

  const user = new User({ name, email, password: hashedPassword });

  await user.save();

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    user: { name, email }
  });
};

//Login User 
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  ///Find user by email
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ error: 'Invalid credentials' });

  //Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

  //Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({
    success: true,
    message: 'Logged in successfully',
    token
  });
};

module.exports = { registerUser, loginUser };
