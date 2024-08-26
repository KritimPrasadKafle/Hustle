// const chalk = require("chalk");
// console.log(chalk);

function sum(a, b) {
  return a + b;
}

let ans = sum(3, 4);
console.log(ans);


const path = require("path");
console.log(__dirname);
console.log(__dirname + "/index.js" + "/projects" + "/index.js");
console.log(path.join(__dirname, "../../index.js", "/projects", "/index.js"))
console.log(__dirname);