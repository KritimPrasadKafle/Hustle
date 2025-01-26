import { generateMnemonic } from "bip39";


async function mnemonic() {
  const mnemonic = generateMnemonic();
  console.log(mnemonic);
}

export default mnemonic;

