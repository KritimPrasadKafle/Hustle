const score = 400;
console.log(score);

const balance = new Number(100)

console.log(balance);

//prototype will show what all methods or function are there in that class

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundereds = 1000000

console.log(hundereds.toLocaleString('en-IN'));

console.log(Math);

console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.5));

console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
