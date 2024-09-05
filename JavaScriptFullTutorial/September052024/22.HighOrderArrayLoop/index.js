// for of

//["", "", ""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  // console.log(num);

}

// const greetings = "Hello world!"
// for (const greeting of greetings) {
//   console.log(greeting);
// }

// Maps

// const map = new Map();
// map.set('IN', "India")
// map.set('NP', "Nepal")
// map.set("US", "United States")

// // console.log(map);

// // for (const [key, value] of map) {
// //   console.log(key, ':-', value);
// // }

// const myObject = {
//   'game1': 'NFS',
//   'game2': 'Spiderman'
// }

// //doestn't works for object
// // for (const [key, value] of myObject) {
// //   // console.log(key, ':-', value);
// // }

// const myObject1 = {
//   js: 'javascript',
//   cpp: 'C++',
//   rb: 'ruby',
//   swift: "swift by apple"
// }

// for (const key in myObject1) {
//   console.log(myObject1[key]);
// }

// for (const key in myObject1) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);

// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//   console.log(programming[key]);

// }


const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (value) {
  console.log(value);

});

// coding.forEach((value) => {
//   console.log(value);


// })


coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
})


const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js"
  },
  {
    languageName: "Java",
    languageFileName: "java"
  },
  {
    languageName: "Python",
    languageFileName: "py"
  }
]

myCoding.forEach((item) => {
  console.log(item.languageName);

})