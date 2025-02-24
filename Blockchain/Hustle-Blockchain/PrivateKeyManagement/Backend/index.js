const express = require('express');
const { userModel } = require("./models");
const { Keypair } = require('@solana/web3.js');
const { jwt } = require('jsonwebtoken');
const app = express();
app.use(express.json());

app.get("/api/v1/signup", async (req, res) => {
  const { username, email, password } = req.body;

  //Validate the inputs using zod, check if the user already exists, hash the password

  const keypair = new Keypair();
  await userModel.create({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
    publicKey: keypair.publicKey.toString(),
    privateKey: keypair.secretKey.toString(),
  })
  res.json({ message: keypair.publicKey.toString() });
})

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = userModel.findOne({
    username: username,
    password: password
  })

  if (user) {
    const token = await jwt.sign({
      id: user
    }, JWT_SECRET)
    res.json({
      token
    })

  } else {
    res.status(403).json({
      message: "Invalid username or password"
    })
  }
})

app.post("/api/v1/txn/sign", (req, res) => {

  res.json({

  })
}
);

app.get("/api/v1/txn", (req, res) => {
  res.json({

  })
})

app.listen(3000);