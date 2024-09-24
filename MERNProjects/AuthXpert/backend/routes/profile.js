const express = require('express');
const Profile = require('../models/Profile.js');
const authenticateJWT = require('../middlewares/jwtAuth.js');
const router = express.Router();

//Create or Updated Profile (Protected Route)

router.put('/', authenticateJWT, async (req, res) => {
  try {
    const { bio, avatar, socialLinks } = req.body;
    const userId = req.user.id;

    //Find the user's profile
    let profile = await Profile.findOne({ user: userId });

    if (profile) {
      //Update existing profile
      profile.bio = bio || profile.bio;
      profile.avatar = avatar || profile.avatar;
      profile.socialLinks = socialLinks.profile.socialLinks;
      await profile.save();
      res.status(200).json({ message: 'Profile updated', profile });
    } else {
      //Create a new Profile
      profile = new Profile({ bio, avatar, socialLinks, user: userId });
      await profile.save();
      res.status(201).json({ message: 'Profile created', profile });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating profile' });
  }
});

//get the current user's profile
router.get('/', authenticateJWT, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.status(200).json({ profile });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
});

//Deleting a profile
router.delete('/', authenticateJWT, async (req, res) => {
  try {
    const profile = await Profile.findOneAndDelete({ user: req.user.id });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.status(200).json({ message: 'Profile deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting profile' });
  }
});

module.exports = router;