// function sum(a, b) {
//   return a + b;
// }
// let ans = sum(2, 3);
// console.log(ans);

// function sumfromonetoN(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;


//   }
//   return sum;
// }
// let anns1 = sumfromonetoN(10);

// console.log(anns1);




// const fs = require("fs");
// const contents = fs.readFileSync("a.txt", "utf8");
// console.log(contents);



//synchronous code
// const fs1 = require("fs");
// const contents1 = fs1.readFileSync("a.txt", "utf8");
// console.log(contents1);
// const contents2 = fs1.readFileSync("b.txt", "utf8");
// console.log(contents2);


//asynchronous code
// const fs1 = require("fs");

// function print(err, data) {
//   console.log(data);
// }
// fs1.readFile("a.txt", "utf8", print);

// fs1.readFile("b.txt", "utf8", print);
// // console.log("Done!");

// function readFile(filePath, encoding, op) {
//   //read file
//   op("Error!!", "hi there");
// }


// function sum(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function divide(a, b) {
//   return a / b;
// }
// function multiply(a, b) {
//   return a * b;
// }

// function doOperation(a, b, op) {
//   return op(a, b);

// }
// console.log(doOperation(1, 2, sum));


// function timeout() {
//   console.log("Click the button!");
// }
// console.log("Hi");
// setTimeout(timeout, 5000);
// console.log("Welcome to loupe.");


// to make setTimeout synchronous
function setTimeoutSync(timeout) {
  let startTime = new Date();
  while (1) {
    let currentTime = new Date();
    if (currentTime - startTime > timeout) {
      break;

    }
  }
}

setTimeoutSync(1000)
console.log("hi there");

function readFromtwoFiles(file1, file2) {
  //read through first file

  //readFile,setTimeout,fetch, database calls
  //read through second file
  return [file1Res, file2Res];
}
