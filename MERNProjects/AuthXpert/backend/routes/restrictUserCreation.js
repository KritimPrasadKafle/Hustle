const restrictUserCreation = (req, res, next) => {
  if (req.user) {
    return res.status(403).json({ error: "You are already logged in and cannot create new users." });
  }
  next();
};

