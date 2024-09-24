const express = require('express');
const User = require('../models/User.js');
const authenticateJWT = require('../middlewares/jwtAuth.js');
const router = express.Router();

//Create a new User (Admin-only route)

router.post('/', authenticateJWT, async (req, res) => {
  try {
    const { name, email, password, roles } = req.body;
    const user = new User({ name, email, password, roles });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });

  } catch (error) {
    res.status(500).json({ error: 'Error creating user', error });
  }
});

//Get all users
router.get('/', authenticateJWT, async (req, res) => {

  console.log('Going here');

  try {

    const users = await User.find();


    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

//Get a single user by ID
router.get('/:id', authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('roles').populate('profile');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }

});

router.put('/:id', authenticateJWT, async (req, res) => {
  try {
    const { name, email, roles } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, email, roles }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });

  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }

});

//Delete a user by ID(Admin-only route)
router.delete('/:id', authenticateJWT, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

module.exports = router;