const fs = require('fs');

//sync
// fs.writeFileSync('./test.txt', "Hey there");

//async
// fs.writeFile("./test.txt", "Hello World Async", (err) => {})

// const content = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(content);

const content1 = fs.readFile("./contacts.txt", "utf-8", (err, result) => {

  if (err) {
    console.log(err);
  }
  else {
    console.log(result);
  }
});





