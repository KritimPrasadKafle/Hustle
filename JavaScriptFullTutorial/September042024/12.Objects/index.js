//singleton

//object


//object literals

const mySym = Symbol("Key1")


const JsUser = {
  name: "kritim",
  "full name": "Kritim Kafle",
  age: 18,
  [mySym]: "mykey1",
  location: "Jaipur",
  email: "Kritim@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "kritim@chatgpt.com"
// Object.freeze(JsUser) //cannot change from now
JsUser.email = "hello@gmail.com";
// console.log(JsUser);


JsUser.greeting = function () {
  console.log("Hello JS User");

}


JsUser.greetingTwo = function () {
  console.log(`Hello JS User,${this.name}`); //this helps to reference to the same object, this will get everything of JSUser
}

// console.log(JsUser.greeting());

// console.log(JsUser.greetingTwo());



//Object part2

const tinderUser = new Object()
const tinderUser1 = {}


tinderUser.id = "1234abc"
tinderUser.name = "Sammy"

tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "kritim",
      lastname: "kafle"
    }
  }
}


// console.log((regularUser.fullname.userfullname.lastname));

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "k@gmail.com"
  },
  {
    id: 2,
    email: "j@gmail.com"
  }
]


users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));


console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
