// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     area(){
//         const area = this.width * this.height;
//         return area;
//     }
//     paint(){
//         console.log(`Painting with color ${this.color}`);
        
//     }
// }

// const rect = new Rectangle(23,45,24);
// console.log(rect.area());


//Inheritance
// class Circle {
//    constructor(radius, color) {
//        this.radius = radius;  
//        this.color = color;
//    }

//    area() {
//       const area = this.radius * this.radius * Math.PI;
//        return area;
//    }
   
//    paint() {
// 			console.log(`Painting with color ${this.color}`);
//    }

// }

// // const circle = new Circle(2, "red")
// const area = circle.area();
// console.log(area)

class Shape {
    constructor(color) {
        this.color = color;
    }

    paint() {
			console.log(`Painting with color ${this.color}`);
    }

    area() {
        throw new Error('The area method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);  // Call the parent class constructor to set the color
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}


const circle = new Circle(20);
console.log(circle.area());


const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format


const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));





function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback(){
    console.log("3 seconds have passed");

    
}

setTimeoutPromisified(3000).then(callback);


setTimeout(function(){
    console.log("hi");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
            
        }, 5000);
        
    }, 3000);
    
}, 1000);

function step3Done() {
  console.log("hello there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);


function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});


setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });


  const fs = require("fs");
function cleanFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    data = data.trim();
    fs.writeFile(filePath, data, function () {
      cb();
    });
  });
}

function onDone() {
  console.log("file has been cleaned");
}
cleanFile("a.txt", onDone);


const fs = require("fs");
function cleanFile(filePath, cb) {
  return new Promise(function (resolve) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

async function main() {
  await cleanFile("a.txt");
  console.log("Done cleaning file");
}

main();


const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onDone).catch(onError);


function filePromisified(filepath){
    return new Promise(function(resolve, reject){
        fs.readFile(filepath, "utf-8", )
    })
}