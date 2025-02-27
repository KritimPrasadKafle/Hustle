import { generateMnemonic, mnemonicToSeedSync } from 'bip39';

const mnemonics = generateMnemonic();
console.log(mnemonics);

const seed = mnemonicToSeedSync(mnemonics);
console.log(seed);

