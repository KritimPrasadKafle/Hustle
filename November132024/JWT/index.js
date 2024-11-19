const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'random'
const app = express()

app.use(express.json())

const users = []

app.get('/signup', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  users.push({
    username: username,
    password: password
  })

  res.json({
    message: "You are signed up"
  })
  console.log(users);
})

app.post("/signin", function (req, res) {

  const username = req.body.username;
  const password = req.body.password;

  // maps and filter
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i]
    }
  }

  if (foundUser) {
    const token = jwt.sign({
      username: username,
      password: password,
      firstname,
      lastName,
      courses: []
    }, JWT_SECRET);

    // foundUser.token = token;
    res.json({
      token: token
    })
  } else {
    res.status(403).send({
      message: "Invalid username or password"
    })
  }
  console.log(users)
})

app.get("/me", (req, res) => {

})