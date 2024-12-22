import mongoose, { model, Schema } from "mongoose";

interface User {
  firstName: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model("User", userSchema);
export default UserModel;
