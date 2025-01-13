const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('100xdevs').digest('hex');
console.log(hash);
