require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000


app.get("/", (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('kritim10kafle@gmail.com')
})

app.get('/login', (req, res) => {
  res.send(`<h1>Please login at kritim's application</h1>`)
})

app.get('/github', (req, res) => {
  res.send({ user: 'kritim' })
})
app.get("/youtube", (req, res) => {
  res.send('kritim')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})