const express = require("express");
const app = express();

function isOldEnoughMiddleWare(req, res, next) {
  const age = req.query.age;
  if (age >= 18) {
    next();

  } else {
    res.json({
      msg: "Sorry you are not of age yet",
    });
  }
}

app.use(isOldEnoughMiddleWare)

app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 2",
  });
});

app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 1",
  });
});

app.listen(3000);