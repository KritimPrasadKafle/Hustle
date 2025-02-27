import * as ed from "@noble/ed25519";

async function main() {
  // Generate a new key pair
  const privateKey = ed.utils.randomPrivateKey();

  //Convert the message "hello world to a Uint8Array"
  const message = new TextEncoder().encode("hello World");

  //Generate the public key from the private key
  const pubkey = await ed.getPublicKeyAsync(privateKey);

  //Sign the message
  const signature = await ed.signAsync(message, privateKey);

  //Verify the message
  const isValid = await ed.verifyAsync(signature, message, pubkey);

  console.log(isValid);


}
main();