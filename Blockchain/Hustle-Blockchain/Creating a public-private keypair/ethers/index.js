import { ethers } from "ethers";

//Generate a random wallet
const wallet = ethers.Wallet.createRandom();

//Extract the public and private keys
const publicKey = wallet.address;
const privateKey = wallet.privateKey;

console.log("Public Key (Address):", publicKey);

console.log("Private key:", privateKey);

//Message to sign
const message = "Hello, World!";

//Sign the message using the wallet's private key
const signature = await wallet.signMessage(message);
console.log(signature);

//Verify the signature
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address:", recoveredAddress);
console.log("Signature is valid:", recoveredAddress === publicKey);



