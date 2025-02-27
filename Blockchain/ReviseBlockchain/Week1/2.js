const crypto = require('crypto');
function input(prefix) {
  let input = 0;
  while (true) {
    const inputStr = input.toString();
    const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }

}

const input1 = input('00000');
console.log(input1);


