import express, { Router } from "express";
import UserModel from "../model/user";

const UserRouter = express.Router();

UserRouter.get("/", async (req, res) => {
  const user = UserModel.find({});
  res.json(user);
});

UserRouter.post("/", async (req, res) => {
  const { firstName, email, password } = req.body;
  const newUser = new UserModel({ firstName, email, password });
  await newUser.save();
  res.status(200).json({ message: "User created successfully" });
});

export default UserRouter;
