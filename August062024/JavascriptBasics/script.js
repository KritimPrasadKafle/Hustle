function hey(name) {
  return "hello," + name;
}
hey("Kritim");

function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

let age = canVote(20);
console.log(age);


let ages = [23, 34, 56, 32];
for (let i = 0; i < ages.length; i++) {
  console.log(ages[i])
}

let users = ["kritim", "rahul", "diljett"];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}


function greet(user) {
  console.log("Hi " + user.name + ", My age is" + user.age + " and my gender is " + user.gender)
}

let user1 = { name: "kritim", age: 20, gender: "male" }
// console.log(user1.age)
// console.log(user1.name)
// console.log(user1.gender)

greet(user1);



function greeting(user) {
  console.log("Hi Mr/Mrs/Others " + user.name + ", your age is " + user.age);
}
let user2 = { name: "kafle", age: 30 };
greeting(user2);




let arr = ["kritim", 21,
  {
    name: "kritim", age: 21, cities: ["delhi", "chandigrah", "bangalore", {
      country: "malaysia", city: "kuala lumpur"
    }]
  }
]
console.log(arr);


function selection(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === 'male' && arr[i].age > 18) {
      arr2.push(arr[i]);
    }
  }
  return arr2;



}

const userss = [{
  name: "harikirat",
  age: 21,
  gender: "male",

},
{
  name: "priya",
  age: 21,
  gender: "female"
}, {
  name: "raman",
  age: 11,
  gender: "male"
}]



let ans = selection(userss);
console.log(ans);



