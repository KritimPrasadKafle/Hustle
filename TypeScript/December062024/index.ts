// function greet(firstName: string) {
//   console.log("Hello " + firstName);
// }

// greet("Kritim");

// function sum(a: number, b: number): number {
//   return a + b;
// }
// let ans = sum(1, 2);
// // console.log(ans);

// function isLegal(age: number) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let a = isLegal(14);
// console.log(a);

//number, string, any
// let x: any = 1;
// x = "hello";
// x = findAncestor;
// x = true;

function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("hello");
});
