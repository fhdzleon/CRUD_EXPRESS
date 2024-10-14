const User = require("../models/User");
const { findUser, checkPassword } = require("../middlewares/loginMiddleware");

const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

const loginUser = async (userData) => {
  const { email, password } = userData;
  const user = await findUser(email);
  await checkPassword(user, password);

  return user;
};

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const findUserByName = async (name) => {
  return await User.findOne(name);
};

const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  getAllUsers,
  createUser,
  loginUser,
  getUserById,
  findUserByName,
  updateUser,
  deleteUser,
};
