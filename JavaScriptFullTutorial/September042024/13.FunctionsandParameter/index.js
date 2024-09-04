


function sayMyName() {
  console.log("K");
  console.log("R");
}

// sayMyName //this one is reference
// sayMyName() //this one is execution

sayMyName();

function addTwoNumbers(a, b) { //a,b is parameter
  // return a + b;
  console.log(a + b);


}


// const add = addTwoNumbers(4, 5);
const add = addTwoNumbers(4, "5"); //4,5 is arguments

// console.log(add);

function loginUserMessage(username) {
  // if (username === undefined) {
  if (!username) {
    console.log("Please enter a username");
    return


  }
  return `${username} just logged in`
}

console.log(loginUserMessage("kritim"));
console.log(loginUserMessage());