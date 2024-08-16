// class Rectangle {
//   constructor(width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//   }

//   area() {
//     const area = this.width * this.height;
//     return area;
//   }
//   paint() {
//     console.log(`Painting with color ${this.color}`);
//   }
// }

// const rect = new Rectangle(2, 4, "red");
// const area = rect.area();
// rect.paint();
// console.log(area);


// const rect1 = {
//   width: 2,
//   height: 3,
//   color: "red"
// }

// function area(rect) {
//   return rect.width * rect.height;
// }

// const ans = area(rect1);
// console.log(ans);



// some other class
// const date = new Date();
// console.log(date.getFullYear());

// let user = {
//   "name": "Kritim",
//   "age": 18
// }

// console.log(user.name);
// user.name = "Ram";

// const map = new Map();
// map.set('name', 'Kritim');
// map.set('age', 20);
// console.log(map.get("name"));



// const man = {
//   "name": "kritim",
//   "age": 20,
//   "move": function () {
//     console.log("Hello I can move");

//   }
// }


// man.move();



//Promises are the one which promises that I wiill return something in the future.

//defining a promises is hard
//using a promises is easy

// function main() {

// }

// setTimeout(main, 3000);  //after 3sec call  the main function.

// //returns an object of the promise class

// function setTimeoutPromisified(ms) {
//   let p = new Promise(resolve => setTimeout(resolve, ms));
//   return p;
// }

// function callback() {
//   console.log("3 second have passed");
// }

// setTimeoutPromisified(3000).then(callback);


// function callback() {
//   console.log("hello I am callback");
// }

// setTimeout(callback, 3000);


// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(5000).then(callback); //syntatically cleaner

// let p = setTimeoutPromisified(5000); //number
// console.log(p);

//make PromisifiedVersionofSetTimeout
// function waitFor3S(resolve) {  //resolve = main
//   setTimeout(resolve, 3000)
// }

// function main() {
//   console.log("main is called");
// }

// promiseCallBack(main);


// setTimeout(function () {
//   console.log("Hello I am small one")
// }, 3000);


// make PromisifiedVersionofSetTimeout
// function waitFor3S(resolve) {  //resolve = main
//   setTimeout(resolve, 3000)
// }


// function setTimeoutPromisified() {
//   return new Promise(waitFor3S);
// }

// function main() {
//   console.log("main is called");
// }

// setTimeoutPromisified().then(main);




//here promise is a  class inside the promise the argument random is a function and the random function inside argument i.e. resolve is also a function.

//basically when the random is completed the object p of class Promise i.e. .then(whatever is here would be called) p.then(main)


// function random(resolve) {
//   setTimeout(resolve, 3000);

// }

// let p = new Promise(random);



//using the eventual value returned by the promise

// function main() {
//   console.log("Main is getting called");
// }

// p.then(main);

// class Promise{
//   Promise(){

//   }

// }



// const content = require("fs");


// function hello(err, data) {
//   if (err) {
//     console.log("Error is there");
//   } else {
//     console.log(data);
//   }

// }
// const abc = content.readFile("a.txt", "utf-8", hello);

// console.log(abc);

// function promisifiedVersionofReadingfile(resolve) {
//   setTimeout(resolve, 3000);
// }

// let p = new Promise(promisifiedVersionofReadingfile);

// function main() {

//   const content1 = require("fs");

//   const abc = content1.readFile("a.txt", "utf-8", hello);
// }

// p.then(main);





// const fs = require("fs");
// const { resolve } = require("path");

// function readTheFile(sendTheFinalValueHere) {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     sendTheFinalValueHere(data);
//   })
// }

// function readFile(fileName) {
//   //read the file and return its value
//   return new Promise(readTheFile);
// }

// const p = readFile();

// function callback() {
//   console.log(contents);
// }

// p.then(callback)


// function readTheFile(resolve) {
//   setTimeout(function () {
//     console.log("callback based setTimeout completed");
//     resolve();

//   }, 3000);
// }

// // function setTimeoutPromisified() {
// //   return n
// // }



// //Promise class
// class Promise2 {
//   constructor(fn) {
//     function afterDone() {
//       this.resolve();
//     }
//     fn(afterDone)
//   }
//   then(callback) {
//     this.resolve = callback;
//   }
// }

// function setTimeoutPromisified(fileName) {
//   console.log("setTimeoutPromisified called");
//   //read the file and return its value
//   return new Promise(readTheFile);
// }

// const pr = setTimeoutPromisified();

// function callback() {
//   console.log("timer is done");
// }

// p.then(callback);

// //console.log("------end of the file-----");




// //the real operation that we want to promisfy
// function doAsyncOp(resolve) {
//   setTimeout(resolve, 3000); //old, callback based, async function
// }


// function setTimeoutPromisified(time) {
//   function doSomething() {
//     setTimeout(resolve, time);
//   }

// }


// const ps = new Promise(doAsyncOp)

// function callback() {
//   console.log("3 seconds have passed");
// }

// ps.then(callback);


// const ps1 = new Promisefn(function () {
//   let c = 0;
//   for (let i = 0; i < 1000000; i++) {
//     c++;
//   }
//   resolve();
// })

const pt = new Promise(promiseFn);

function callback() {
  console.log("hi there");
}

pt.then(callback);


function doAsyncOp(resolve) {

}

function setTimeoutPromisified() {
  return new Promise(doAsyncOp)
}

function callback() {
  console.log("resolve")
}

const po = setTimeoutPromisified();

p(callback, 3000); //not clean
p(3000).then(callback); //cleaner


