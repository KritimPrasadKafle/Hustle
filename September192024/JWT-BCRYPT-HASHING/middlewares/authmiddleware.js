const jwt = require('jsonwebtoken');

const jwt_secret = 'hello123';
const authmiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided' });
  }
  try {
    const decoded = jwt.verify(token, 'jwt_secret');
    req.user = decoded;
    next();

  }
  catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};
module.exports = authmiddleware;