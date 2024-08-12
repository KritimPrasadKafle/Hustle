// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();


// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
//   console.log("hello");

// }
// x();


function outer() {
  var a = 10;
  function inner() {
    console.log(a);

  }
  let a = 10;
  return inner;
}

outer()();