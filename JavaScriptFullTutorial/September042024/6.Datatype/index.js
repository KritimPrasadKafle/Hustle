//primitive and non primitive datatypes

//primitive datatype : call by value

//7 types : String, Number, Boolean, null, undefined, Symbol(unique), BigInt,

// JavaScript is dynamic typed language means there is not such thing that for string we should have different datatype we can use let, var, const


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 345566454543443354343n

//Array
const heros = ["shaktiman", "naagraj", "doga"]

//Object
let myObj = {
  name: "kritim",
  age: 22,
}

//function
const myfunction = function () {
  console.log("Hello World");
}

console.log(typeof myObj);
console.log(typeof myfunction);

//Reference type or Non Primitive type: the reference of the variable would be allocated

//Arrays, Objects, Functions,


// Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String => string
// Boolean => boolean
// null  => object
// undefined => undefined
// Symbol => symbol
// BigInt => bigint

// 2) Non - primitive Datatypes
// Arrays => object
// Function => function
//   Object  => object


// JavaScript is a dynamically typed language.This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

