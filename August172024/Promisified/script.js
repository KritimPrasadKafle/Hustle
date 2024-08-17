// function setTimeoutpromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }

// function callback() {
//   console.log("1 second has passed");
// }

// setTimeoutpromisified(5000).then(callback);


// function hi() {
//   console.log("hi");
//   function hello() {
//     console.log("hello");
//     function hellothere() {
//       console.log("Hello there");
//     }
//     setTimeout(hellothere, 5000);
//   }
//   setTimeout(hello, 3000);


// }
// setTimeout(hi, 1000);





function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}


setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});


setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  return setTimeoutPromisified(3000)
})
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000)
  })
  .then(function () {
    console.log("hello there");
  });

console.log("outside the callback hell")


async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");
  await setTimeoutPromisified(3000);
  console.log("hello");
  await setTimeoutPromisified(5000);
  console.log("hi there");
}


solve();

console.log("after solve function");