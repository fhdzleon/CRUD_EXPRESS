const validateUser = (req, res, next) => {
  const { name, email, BOD } = req.body;

  if (!name || !email || !BOD) {
    return res.status(400).json({
      error: "Faltan datos, Revise",
    });
  } else {
    next();
  }
};

module.exports = validateUser;
