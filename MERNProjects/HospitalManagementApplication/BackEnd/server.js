const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const doctorsRouter = require('./routes/doctors.js');
const appointmentsRouter = require('./routes/appointments');
const patientsRouter = require('./routes/patients.js');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//Connect to MongoDB
mongoose.connect(
  'mongodb+srv://admin:1234567890@cluster0.ptksj.mongodb.net/hospital',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');

});

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

})