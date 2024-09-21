const { z } = require('zod');

///Schema for user registration validation

const userRegistrationSchema = z.object({
  name: z.string().min(2, "Name should be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password should be at least 6 characters long")
});

const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password should be at least 6 characters long")
});

module.exports = { userRegistrationSchema, userLoginSchema };

