const { Router } = require("express");
const userController = require("../controllers/users.controller");
const validateUser = require("../middlewares/validateUser");

const userRouter = Router();

userRouter.post("/", validateUser, userController.createUser);
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
