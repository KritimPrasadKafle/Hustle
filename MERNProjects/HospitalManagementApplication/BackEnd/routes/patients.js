const express = require('express');
const Patient = require('../models/Patient.js')
const app = express();

app.use(express.json());
//get all the patient

app.get('/', (req, res) => {
  Patient.find()
    .then((patient) => {
      res.json(patient)
    })
    .catch((err) => {
      res.json('Error:', err);
    })
})


//add new patient

app.post('/add', (req, res) => {
  const { name, age, gender } = req.body;
  const newPatient = new Patient({
    name, age, gender
  })
  newPatient.save()
    .then((savePatient) => {
      res.json(savePatient)
    })
    .catch((err) => {
      res.status(400).json('Error :', err);
    })
});

//update patient data
app.post('/update/:id', (req, res) => {

  console.log("update route hit!");

  Patient.findById(id)
    .then((patient) => {
      if (!patient) {
        return res.json('Patient not found');
      }

      patient.name = req.body.name;
      patient.age = req.body.age;
      patient.gender = req.body.gender;

      patient.save()
        .then(() => {
          res.json('Patient updated')
        })
        .catch((err) => {
          res.json('Error:', err);
        })

        .catch((err) => {
          res.status(400).json('Error: ', err);
        });

    }

    )
})

//Delete patient By Id

app.delete('/delete/:id', (req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then((patient) => {
      if (!patient) {

        return res.status(404).json('Patient not found');
      }
      res.json('Patient deleted');
    })
    .catch((err) => {
      res.status(400).json('Error: ', err);
    })

})

module.exports = app;