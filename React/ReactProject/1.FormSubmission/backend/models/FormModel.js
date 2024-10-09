const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  gender: { type: String, required: true },
  subjects: { type: Object, required: true }, // Assuming subjects is an object
  resume: { type: String, required: true },
  url: { type: String, required: true },
  selectedOption: { type: String, required: true },
  about: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);