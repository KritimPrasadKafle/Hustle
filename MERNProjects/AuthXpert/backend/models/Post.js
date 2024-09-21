const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  "createdAt": {
    type: Date,
    required: true

  },
  //Many-to-One with User 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  //One-to-Many with comment
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],


}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema);