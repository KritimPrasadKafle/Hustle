const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const UserSchema = new Schema({
  email: String,
  name: String,
  password: String
}, {})


const TodoSchema = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean
}, {})

const UserModel = mongoose.model('users', UserSchema);
const TodoModel = mongoose.model('todos', TodoSchema);


module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel
}