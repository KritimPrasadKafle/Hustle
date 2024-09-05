// for

for (let f = 0; f < 10; f++) {
  if (f == 5) {
    break;


  }
  console.log(f);

}

for (let f = 0; f < 10; f++) {
  if (f == 5) {
    continue;


  }
  console.log(f);

}

let j = 0
while (j < 5) {
  console.log(j);
  j++;
}

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}


let score = 11
do {
  console.log(`Score is ${score}`);
  score++;

} while (score <= 10);
