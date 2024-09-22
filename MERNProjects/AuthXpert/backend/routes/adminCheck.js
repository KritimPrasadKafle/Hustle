const adminCheck = (req, res, next) => {
  if (!req.user || !req.user.roles.includes('admin')) {
    return res.status(403).json({ error: "You are not authorized to create users." });

  }
  next();
};

