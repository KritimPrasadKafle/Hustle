const { User } = require("../models/user.models");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function getUserById(req, res) {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }

}


async function handleUpdateUserById(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "Success" });
}


async function handleDeleteUserById(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;

  if (!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender) {
    return res.status(400).json({ msg: "All fields are req..." });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,

  });

  console.log("result", result);

  return res.status(201).json({ msg: "success" })
}


module.exports = { handleGetAllUsers, getUserById, handleUpdateUserById, handleUpdateUserById, };
module.exports = { handleGetAllUsers, getUserById, handleUpdateUserById, handleCreateNewUser, handleDeleteUserById };