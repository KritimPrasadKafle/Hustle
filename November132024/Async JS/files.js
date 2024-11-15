const fs = require('fs')
// const data = fs.readFileSync('a.txt', 'utf-8')
// const data1 = fs.readFileSync('b.txt', 'utf-8')
// console.log(data);
// console.log(data1);

function print(err, data) {
  if (err) {
    console.log("File not found..");
  } else {
    console.log(data);
  }
}

fs.readFile("a.txt", "utf-8", print)
fs.readFile("b.txt", "utf-8", print)

console.log("Done!!");



