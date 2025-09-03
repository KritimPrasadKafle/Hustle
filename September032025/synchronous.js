//Synchronous Code

function sum(n){
    let ans = 0;
    for(let i =1; i<=n; i++){
        ans += i;

    }
    return ans;

}

const ans1 = sum(100);
console.log(ans1);

const ans2 = sum(200);
console.log(ans2);

const ans3 = sum(20000);
console.log(ans3);


const ans4 = sum(10);
console.log(ans4);

//I/O heavy Tasks
const fs = require('fs');
const content = fs.readFileSync('a.txt', 'utf-8');

console.log(content);

const content1 = fs.readFileSync('b.txt', 'utf-8');
console.log(content1);


//Asynchronous task

//const fs = require('fs');

fs.readFile('a.txt', 'utf-8', function(err, data){
    console.log(data);
    
})

fs.readFile('b.txt', 'utf-8', function(err, data){
    console.log(data);
    
})

fs.readFile('b.txt', 'utf-8', function(err, data){
    console.log(data);
    
})

//Functional Argument

function sum(a,b){
    return a+b;
    
}

function multiply(a,b){
    return a * b;
}

function subtract(a,b){
    return a - b;

}

function divide(a,b){
    return a / b;
}

function doOperation(a,b, op){
    return op(a,b);
}

console.log(sum(1,2));


//Callback

function afterFileRead(err, contents){
    console.log(contents);
    
}

fs.readFile("a.txt", "utf-8", afterFileRead);

//SetTimeout
function run(){
    console.log("I will run after 1s");
    
}

setTimeout(run, 1000);
console.log("I will run immediately");


//Asynchronous code

function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();