const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment.js');
const app = express();


app.use(express.json());
//Get all appointments


app.get('/', (req, res) => {
  Appointment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json('Error: ', err));
});

//Add new appointment
app.post('/add', (req, res) => {
  const { patientName, doctorName, date } = req.body;
  const newAppointment = new Appointment({ patientName, doctorName, date });

  newAppointment.save()
    .then(savedAppointment => res.json(savedAppointment)).
    catch(err => res.status(400).json('Error: ', err));
});


//Update appointment data

app.post('/update/:id', (req, res) => {
  Appointment.findById(req.params.id)
    .then(appointment => {
      appointment.patientName = req.body.patientName;
      appointment.doctorName = req.body.doctorName;
      appointment.date = req.body.date;

      appointment.save()
        .then(() => res.json('Appointment updated!'))
        .catch(err => res.status(400).json('Error: ', err));
    });
});

//Delete appointment
app.delete('/delete/:id', (req, res) => {
  Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted successfully"))
    .catch(err => res.status(400).json('Error: ', err));
})


module.exports = app;



