const express = require('express');
const app = express();

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}



app.get('/multiply', function (req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  const result = multiply(a, b);
  return res.json({ result: result });
});



app.get('/add', function (req, res) {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  const result = add(a, b);
  return res.json({ result: result });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
