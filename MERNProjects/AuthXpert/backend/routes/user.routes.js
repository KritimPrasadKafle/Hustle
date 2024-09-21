const express = require('express');
const { userRegistrationSchema, userLoginSchema } = require('../validation/user.validation.js');
const zodMiddleware = require('../middlewares/zodMiddleware.js');
const { registerUser, loginUser } = require('../controllers/user.controller');

const router = express.Router();

//Register route with validation

router.post('/register', zodMiddleware(userRegistrationSchema), registerUser);

router.post('/login', zodMiddleware(userLoginSchema), loginUser);

module.exports = routers;

