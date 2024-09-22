const express = require('express');
const app = express();


app.post('/user/signup', (req, res) => {
  res.json({
    message: "signup endpoint"
  })
})

app.post('/user/signin', (req, res) => {
  res.json({
    message: "Signin endpoint"
  })
})

app.get('/user/purchase', (req, res) => {
  res.json({
    message: "purchase endpoint"
  })
})

app.post('/course/purchases', (req, res) => {
  res.json({
    message: "purchase endpoint"
  })
})



app.get('/courses', (req, res) => {
  res.json({
    message: "purchase endpoint"
  })
})
app.listen(3000);