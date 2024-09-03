const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kritim')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const newString1 = gameName.slice(-8, 4);
console.log(newString1);

const hello = new String("   hey   ");
const trimmed = hello.trim();
console.log(trimmed)

const url = "https://kritim.com/kritim%20kafle"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'))

const gameName2 = new String("kritim-kafle-45");
console.log(gameName.split('-'))