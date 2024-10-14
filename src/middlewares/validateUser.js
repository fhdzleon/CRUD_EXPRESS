const User = require("../models/User");

const validateUser = async (req, res, next) => {
  const { name, email, BOD, password } = req.body;

  if (!name || !email || !BOD || !password) {
    return res.status(400).json({
      error: "Faltan datos, Revise",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        error: "Ya existe un usuario con este correo",
      });
    }
    next();
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error al validar el usuario",
    });
  }
};

module.exports = validateUser;
