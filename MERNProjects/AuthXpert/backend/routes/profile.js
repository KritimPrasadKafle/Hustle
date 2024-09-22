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
  }
})