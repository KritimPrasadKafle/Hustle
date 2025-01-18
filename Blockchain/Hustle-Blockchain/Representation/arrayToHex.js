function arrayToHex(byteArray) {
  let hexString = '';
  // [h,e,l,l,o]
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, '0');
  }
  return hexString;
}

const str = "hello"
const byteArray1 = new TextEncoder().encode(str);
const hexString1 = arrayToHex(byteArray1);
console.log(hexString1);
