const mongoose = require('mongoose');
// const Schema = new Schema();
const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
}, {});

module.exports = mongoose.model('Patient', PatientSchema);


