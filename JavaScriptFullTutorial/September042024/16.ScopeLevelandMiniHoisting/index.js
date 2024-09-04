
//child function can access the variables of the parent function

function one() {
  const username = "kritim"

  function two() {
    const website = "Youtube"
    console.log(username)
  }
  // console.log(website);
  two()
}

// one()


if (true) {
  const username = "Kritim"
  if (username === "kritim") {
    const website = "Youtube"
    console.log(username + website);
  }
  // console.log(website);

}
// console.log(username);


//Hoisting
console.log(addOne(5));
function addOne(num) {
  return num + 1

}




console.log(addTwo(5));

const addTwo = function (num) {
  return num + 2
}

