// ...is the rest operator. It will take any number of values

function calculateCartPrice(...num1) {
  return num1
}

console.log(calculateCartPrice(200, 300, 400));


function calculateCartPrice(val, val1, ...num1) {
  return num1
}

console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
  username: "kritim",
  price: 199
}

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

//handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

handleObject(user)

const mynewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
  return getArray
}

console.log(returnSecondValue(mynewArray));
