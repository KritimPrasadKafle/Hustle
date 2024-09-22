const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'abcde12345';

const authenticationJWT = (req, res, next) => {
  // Get the token from the 'Authorization' header and split to remove 'Bearer'
  const authHeader = req.header('Authorization'); // Check the standard 'Authorization' header
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token after 'Bearer'

  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided' });
  }

  try {
    // Verify the token using JWT_SECRET
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded token data (usually user id, roles, etc.)
    next(); // Call next middleware or route handler
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = authenticationJWT;
