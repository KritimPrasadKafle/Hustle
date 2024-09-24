const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  //Many-to-Many relationship with Role
  roles: [{
    type: String,
    enum: ['Admin', 'User', 'Moderator']
  }],
  //One-to-One relationship with Profile
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
}, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);
