const mongoose = require("mongoose");
require("dotenv").config();

const dbCon = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Base de datos conectada a MongoDb");
    })
    .catch((err) => {
      console.error("Error de conexion con MongoDb", err);
    });
};

module.exports = dbCon;
