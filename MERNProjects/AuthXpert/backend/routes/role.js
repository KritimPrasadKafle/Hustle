const express = require('express');
const Role = require('../models/Role.js');
const authenticateJWT = require('../middlewares/jwtAuth.js');
const router = express.Router();

//create a new role(Admin-only);
router.post('/', authenticateJWT, async (req, res) => {
  try {
    const { role } = req.body;
    const newRole = new Role({ role });
    await newRole.save();
    res.status(201).json({ message: 'Role created successfully', role: newRole });
  } catch (error) {
    res.status(500).json({ error: 'Error creating role' });
  }
});

//Get all roles
router.get('/', authenticateJWT, async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({ roles });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching roles' });
  }
});

//Get a role by ID
router.get('/:id', authenticateJWT, async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(200).json({ error: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching role' });
  }
});

//Update a role by ID(Admin-only)
router.put('/:id', authenticateJWT, async (req, res) => {
  try {
    const { role } = req.body;
    const updatedRole = await Role.findByIdAndUpdate(req.params.id, { role }, { new: true });
    if (!updatedRole) {
      return res.status(404).json({ error: 'Role not found' });
    }


  } catch (error) {
    res.status(500).json({ error: 'Error updating role' });
  }
});

//Delete a role by ID (Admin-only)
router.delete('/:id', authenticateJWT, async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });

    }
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting role' });
  }
});

module.exports = router;
