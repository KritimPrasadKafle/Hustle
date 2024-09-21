const zodMiddleware = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.errors.map((e) => e.message)
    });
  }
};

modules.exports = zodMiddleware;