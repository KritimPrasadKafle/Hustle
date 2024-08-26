import chalk from 'chalk';

console.log(chalk.blue('Hello World'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.bold("This is a success message"));

const hello = "Kritim";
console.log(chalk.bgBlue.italic(hello));


const fs = require("fs");

fs.readFile("a.txt", function (err, data) {
  console.log(data);
})