// Array can have any kind of elements like boolean, number, string

//Javascript, array-copy operations create shallow-copies.
//shallow-copies of an object is a copy whose properties share the same references(point to the same underlying values) as those of the source object from which the copy was made.
//Deep copy of an object is a copy whose properties donot share the same references (point to the same underlying values) as those of the source object from which the copy was made.

const arr = [1, 2, 3, 4, 5, true, "hello"];
// console.log(arr[1]);

const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4);

//array method 

myArr2.push(4);//add at the last
myArr2.push(9);

myArr2.pop();//removed the last element

myArr2.unshift(0);//add at the first, timeconsuming becuase if we are having 1000 elements then we need shift every elements to plus one

myArr2.shift(); //removes the first element

// console.log(myArr2.includes(9));

// console.log(myArr2.indexOf(9));

const newArr = myArr2.join();

// console.log(myArr2);
// console.log(newArr);

//slice, splice

// console.log("A", myArr2);

const myn1 = myArr2.slice(1, 3)

// console.log(myn1);
// console.log("B", myArr2);

const myn2 = myArr2.splice(1, 3);
// console.log(myn2);


// console.log(myArr2);



//prototypes provides the methods

//Array part2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros); //makes 2d array

// console.log(marvel_heros);

const combines = marvel_heros.concat(dc_heros);//concats in the same array

// console.log(combines);


const all_new_heros = [...marvel_heros, ...dc_heros] //this is also concatenation
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity); //spreads all the elements and makes everything in the same array

// console.log(real_another_array);


console.log(Array.isArray("kritim"));
console.log(Array.from("Kritim"));
console.log(Array.from({ name: "kritim" }))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))