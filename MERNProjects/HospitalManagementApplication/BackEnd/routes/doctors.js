const express = require('express');
const app = express();
const Doctor = require('../models/Doctor.js')
app.use(express.json());

app.get('/', (req, res) => {
  Doctor.find()
    .then((doctor) => res.json({ doctor }))
    .catch((err) => {
      req.json("Error:", err);
    })
});

app.post('/add', (req, res) => {
  const { name, specialty } = req.body;
  const newDoctor = new Doctor({ name, specialty });

  newDoctor.save()
    .then((saveDoctor) => res.json(saveDoctor))
    .catch((err) => {
      res.status(400).json('Error: ', err);
    })

})

//update doctor data

app.post('/update/:id', (req, res) => {
  Doctor.findById(req.params.id)
    .then((doctor) => {
      if (!doctor) {
        return res.status(404).json('Doctor not found');
      }

      doctor.name = req.body.name;
      doctor.specialty = req.body.specialty;

      doctor.save()
        .then(() => res.json('Doctor updated'))
        .catch((err) => res.status(400).json('Error: ', err));
    })
    .catch((err) => {
      res.status(400).json('Error :', err);
    })
});

//Delete doctor by ID

app.delete('/delete/:id', (req, res) => {
  Doctor.findByIdAndDelete(req.params.id)
    .then((doctor) => {
      if (!doctor) {
        return res.status(404)
          .json('Doctor not found');
      }
      res.json('Doctor deleted');
    })

    .catch((err) => res.status(400).json('Error: ', err));


})

module.exports = app;
