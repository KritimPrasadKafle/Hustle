const crypto = require('crypto');
function findHashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr = input.toString();
    const hash = crypto.createHash('sha256').update(input).digest('hex');
    if (hash.startsWith(prefix)) {
      return { input: input, hash: hash };
    }
    input++;
  }
}

const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}, Hash: ${result.hash}`);
