// function sum(a, b) {
//   return a + b;
// }

// let ans = sum(20, 30);
// console.log(ans)

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
  // return n * (n + 1);
}

const ans = sum(10);
console.log(ans);
