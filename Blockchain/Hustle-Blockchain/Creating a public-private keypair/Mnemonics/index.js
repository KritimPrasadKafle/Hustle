import { generateMnemonic } from 'bip39';

//Generate a 12-word mnemonic
const mnemonic = generateMnemonic();
console.log('Generate Mnemonic:', mnemonic);
