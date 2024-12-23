import express, { Router } from "express";
import UserModel from "../model/user";

const UserRouter = express.Router();

UserRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

UserRouter.put("/edit/:id", async (req, res) => {
  const { firstName, email, password } = req.body;
  const id = req.params.id;
  const user = await UserModel.findByIdAndUpdate(
    id,
    { firstName, email, password },
    { new: true }
  );
  res.json("Updated Successfully");
});

UserRouter.post("/", async (req, res) => {
  const { firstName, email, password } = req.body;
  const newUser = new UserModel({ firstName, email, password });
  await newUser.save();
  res.status(200).json({ message: "User created successfully" });
});

export default UserRouter;
