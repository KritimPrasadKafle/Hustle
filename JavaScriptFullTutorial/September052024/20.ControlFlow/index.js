//if 
// condition should be true to execute the block of if statement

const isUserLoggedIn = true

if (isUserLoggedIn) {

}


// 2<=2
// >,>,<=,>=, ==, !=, ===, !==


const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feburary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("You are giving more than 12 or less than 0");
}


const userEmail = "kritim@kri.com"

if (userEmail) {
  console.log("Got the user email");
}

else {
  console.log("Don't have user email");
}


// falsy value

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthy values

//"0", 'false'," ", [], {}, function(){}

//to check array

if (userEmail.length === 0) {
  console.log("Array is empty");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

// If first value has been used then after the ?? this should be used.
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 10


console.log(val1);


// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80");

