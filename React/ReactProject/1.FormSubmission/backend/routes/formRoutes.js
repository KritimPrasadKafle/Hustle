// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const Form = require('../models/FormModel.js');

// //Route to handle form submission

// //configure multer
// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage });
// // Handle form submission with file upload
// router.post('/submit', upload.single('resume'), async (req, res) => {
//   console.log(req.file);
//   console.log(req.body);


//   try {
//     const formData = new Form({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       contact: req.body.contact,
//       gender: req.body.gender,
//       subjects: req.body.subjects,
//       selectedOption: req.body.selectedOption,
//       about: req.body.about,
//       resume: req.file.path, // Store the file path in the database
//     });

//     await formData.save();
//     res.status(200).json({ message: 'Form submitted successfully', data: formData });
//   } catch (error) {
//     console.error('Error saving form data:', error);
//     res.status(500).json({ message: 'Error saving form data', error });
//   }
// });

// module.exports = router;




const express = require('express');
const multer = require('multer');
const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Use a timestamp to avoid name collisions
  },
});

const upload = multer({ storage });

// Route to handle form submission
router.post('/submit', upload.single('resume'), async (req, res) => {
  console.log(req.file); // Log the file object to see if it's received
  console.log(req.body); // Log the body of the request

  // Check if req.file is defined
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const formData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      contact: req.body.contact,
      gender: req.body.gender,
      subjects: req.body.subjects,
      selectedOption: req.body.selectedOption,
      about: req.body.about,
      resumePath: req.file.path, // Save the path of the uploaded file
      // You can add other fields as necessary
    };

    // Save formData to your MongoDB here...
    res.status(200).json({ message: 'Form data saved successfully', data: formData });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error saving form data', error });
  }
});

module.exports = router;
