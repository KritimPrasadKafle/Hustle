const http = require('http');
const fs = require('fs');
const express = require('express');


const app = express();

app.get('/', (req, res) => {
  return res.send("Hello from Home Page");
})

app.get('/about', (req, res) => {
  return res.send("About Page");
})


function handler(req, res) {

  const log = `${Date.now()}: New Req Received`
  fs.appendFile('log.txt', log, (err, data) => {
    // console.log(req.headers);

    // console.log("New Req Rec.");
    res.end("Hello From server");
  })
}
const myServer = http.createServer(handler);

app.listen(8000, () =>
  console.log("It's up and running")

);

