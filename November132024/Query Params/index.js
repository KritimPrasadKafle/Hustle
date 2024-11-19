const express = require('express')
const app = express()

function mutliply(a, b, c) {
  return a * b * c;

}
app.get('/', (req, res) => {
  res.json({
    msg: "Hello World"
  })
})

app.get('/multiply', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const c = req.query.c;
  const result = mutliply(a, b, c);
  return res.json({ total: result })
})
app.listen(4000)