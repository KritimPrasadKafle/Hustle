//this refers to the current context


const user = {
  username: "kritim",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);



  }


}


// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

console.log(this);


// function chai() {
//   let username = "kritim"
//   console.log(this.username);

// }

// chai();


// const chai = function () {
//   let username = "kritim"
//   console.log(this.username);
// }
// chai();


//arrow function
const chai = () => {
  let username = "kritim"
  console.log(this);
}
chai();


const addTwo = (num1, num2) => {
  return num1 + num2;
}

console.log(addTwo(3, 4));

const addTwoo = (num1, num2) => (num1 + num2);
const addThree = (num1, num2) => num1 + num2;
const addFour = (num1, num2) => ({ username: "Kritim" });


console.log(addTwo(3, 4));

const myArray = [2, 3, 4, 5, 7];
// myArray.forEach();
