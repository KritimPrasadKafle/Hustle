const { z } = require('zod');
const { validate } = require('../models/User');

const userValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const validateUser = (userData) => {
  return userValidationSchema.safeParse(userData);
}

module.exports = { validateUser };