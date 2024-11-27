const express = require('express');
const UserRouter = express.Router();
const { handleGetAllUsers, getUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/user.controller.js');


UserRouter.get("/", handleGetAllUsers);

UserRouter.get("/:id", getUserById);

UserRouter.patch("/:id", handleUpdateUserById)

UserRouter.delete("/:id", handleUpdateUserById);

UserRouter.post("/", handleCreateNewUser);

module.exports = UserRouter;