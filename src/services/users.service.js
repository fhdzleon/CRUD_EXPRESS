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

const getAllUsers = async () => {
  return users;
};

const createUser = async (name, email, BOD) => {
  const newUser = {
    id,
    name,
    email,
    BOD,
  };
  id++;
  users.push(newUser);
};

module.exports = {
  getAllUsers,
  createUser,
};
