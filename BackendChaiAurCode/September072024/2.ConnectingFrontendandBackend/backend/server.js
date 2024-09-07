import express from 'express';

const app = express();

app.use(express.static('dist'))

app.get('/hello', (req, res) => {
  res.send('Server is ready');
});

//get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: "Why don't scientists trust atoms?", content: "Because they make up everything!" },
    { id: 2, title: "Why did the chicken join a band?", content: "Because it had the drumsticks!" },
    { id: 3, title: "What do you call fake spaghetti?", content: "An impasta!" },
    { id: 4, title: "Why do cows wear bells?", content: "Because their horns don’t work!" },
    { id: 5, title: "What do you get if you cross a snowman and a vampire?", content: "Frostbite!" },
    { id: 6, title: "Why was the math book sad?", content: "Because it had too many problems." },
    { id: 7, title: "Why can't you hear a pterodactyl go to the bathroom?", content: "Because the 'P' is silent!" },
    { id: 8, title: "What did one wall say to the other?", content: "I'll meet you at the corner!" },
    { id: 9, title: "Why don’t skeletons fight each other?", content: "They don’t have the guts." },
    { id: 10, title: "What do you call cheese that isn't yours?", content: "Nacho cheese!" }
  ];

  res.send(jokes);
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up and running in ${port}`);

})
