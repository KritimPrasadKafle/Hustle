import * as ed from "@noble/ed25519";

const privateKey = ed.utils.randomPrivateKey();

const message = new TextEncoder().encode("hello world");

const publicKey = ed.getPublicKeyAsync(privateKey);

const signature = await ed.signAsync(message, privateKey);

const isValid = await ed.verifyAsync(signature, message, publicKey);

console.log(isValid);

