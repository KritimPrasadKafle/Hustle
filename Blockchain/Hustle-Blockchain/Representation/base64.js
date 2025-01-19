const check = new Uint8Array([8, 14, 26, 74]);
const hello = Buffer.from(check).toString("base64");
console.log(hello);

