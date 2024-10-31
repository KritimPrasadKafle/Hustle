const express = require('express');
const app = express();

app.post('/user/signup', function (res, req) {
  res.json({
    message: "Signup endpoint"
  })
})

app.post('/user/signin', function (res, req) {
  res.json({
    message: "Signin endpoint"
  })
})

app.get('/user/purchases', function (res, req) {
  res.json({
    message: "Signup endpoint"
  })
})

app.post('/course/purchase', function (res, req) {
  res.json({
    message: "Signup endpoint"
  })
})

app.get('/courses', function (res, req) {
  res.json({
    message: "Signup endpoint"
  })
})