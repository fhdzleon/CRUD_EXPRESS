const User = require("../models/User");

const findUser = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};

const checkPassword = async (user, password) => {
  if (user.password !== password) {
    throw new Error("Contraseña incorrecta");
  }
};

module.exports = {
  findUser,
  checkPassword,
};
