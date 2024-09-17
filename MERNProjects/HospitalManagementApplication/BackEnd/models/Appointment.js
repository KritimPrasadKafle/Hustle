const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
  patientName: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
}, {})

module.exports = mongoose.model('Appointment', appointmentSchema);