import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is ready');
});

//get a list of 5 jokes

app.get('/jokes', (req, res) => {
  const jokes = [{ "id": 1, "title": "Hello" }];
  res.json(jokes);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
})