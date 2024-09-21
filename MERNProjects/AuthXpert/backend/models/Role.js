const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user', 'moderator'], //predefined roles
  },
  //Many-to-Many with User
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'

  }],
}, {
  timestamps: true
});


module.exports = mongoose.model('Role', roleSchema);

