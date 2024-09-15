const { UserModel, TodoModel } = require('./db')
const express = require("express");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require('mongoose');
const JWT_SECRET = "adsjksbdbsdfdfs1234";


mongoose.connect("mongodb+srv://admin:1234567890@cluster0.ptksj.mongodb.net/todo-app");


const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name
  })

  res.json({
    message: "You are logged in"
  })


});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password
  })
  console.log(user);

  if (user) {
    const token = jwt.sign({
      id: user._id.toString()
    }, JWT_SECRET);
    res.json({
      token: token

    })
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }

});

app.post("/todo", auth, (req, res) => {
  const userId = req.userId;

  const title = req.body.title;
  TodoModel.create({
    title,
    userId
  })

  res.json({
    userId: userId
  })

});

app.post("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId: userId
  })

  res.json({
    todos
  })

});

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect credentials"
    })
  }
}


app.listen(3000);