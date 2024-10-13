const users = [
  {
    id: 1,
    name: "Felipe",
    email: "felipe@mail.com",
    BOD: "23/07/1981",
  },
  {
    id: 2,
    name: "Karla",
    email: "karla@mail.com",
    BOD: "25/04/1980",
  },
];

let id = 3;

const createUser = async (userData) => {
  const newUser = {
    id,
    ...userData,
  };
  id++;
  users.push(newUser);
  return newUser;
};

const getAllUsers = async () => {
  return users;
};

const getUserById = async (id) => {
  let findUser = users.find((user) => user.id === Number(id));
  return findUser;
};

const updateUser = async (id, userData) => {
  const userIndex = users.findIndex((user) => user.id === Number(id));

  if (userIndex === -1) {
    return null;
  }
  users[userIndex] = {
    ...users[userIndex],
    ...userData,
  };
  return users[userIndex];
};

const deleteUser = async (id) => {
  const userIndex = users.findIndex((user) => user.id === Number(id));

  if (userIndex === -1) {
    return null;
  }
  users.splice(userIndex, 1);
  return "User delete";
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
