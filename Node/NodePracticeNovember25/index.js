const fs = require('fs');

//sync
// fs.writeFileSync('./test.txt', "Hey there");

//async
// fs.writeFile("./test.txt", "Hello World Async", (err) => {})

// const content = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(content);

// const content1 = fs.readFile("./contacts.txt", "utf-8", (err, result) => {

//   if (err) {
//     console.log(err);
//   }
//   else {
//     // console.log(result);
//   }
// });


// fs.appendFileSync("./test.txt", new Date().toISOString());

// fs.unlinkSync("./test.txt");
// fs.mkdirSync("my-docs");




// sync ... Blocking
// fs.writeFileSync('./test.txt', "Hey there");

// async ... Non-Blocking
// fs.writeFile("./test.txt", "Hello World Async", (err) => { })


// Blocking code

// console.log("1");

// const result = fs.readFileSync('contacts.txt', "utf-8");

// console.log(result);
// console.log("2");


const os = require('os');
console.log(os.cpus().length);
console.log("1");

const result1 = fs.readFile('contacts.txt', "utf-8", (err, res) => {
  console.log(res);

});


console.log("2");





