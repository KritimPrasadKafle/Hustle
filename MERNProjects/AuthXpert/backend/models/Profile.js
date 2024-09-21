const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
  bio: {
    type: String,
    maxlength: 300,
  },
  "avatar": {
    type: String,


  },
  "socialLinks": [{
    type: String,



  }],

  //One-to-One with User
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true
  },
}, { timestamps: true });


module.exports = mongoose.model('Profile', profileSchema);