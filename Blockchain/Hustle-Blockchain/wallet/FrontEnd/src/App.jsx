import { useState } from "react";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { Wallet, HDNodeWallet } from "ethers";
import "./App.css";
import { Buffer } from "buffer"; // Import Buffer polyfill


window.Buffer = Buffer; // Set Buffer globally for compatibility

function App() {
  const [mnemonic, setMnemonic] = useState("");

  const createMnemonic = async () => {
    const mn = await generateMnemonic();
    setMnemonic(mn);
  };

  return (
    <div className="App">
      <h1>Wallet Generator</h1>
      <div>
        <button onClick={createMnemonic}>Create Seed Phrase</button>
        <input
          type="text"
          value={mnemonic}
          readOnly
          placeholder="Generated Seed Phrase"
        />
      </div>
      <div>
        <h2>Solana Wallets</h2>
        <SolanaWallet mnemonic={mnemonic} />
      </div>
      <div>
        <h2>Ethereum Wallets</h2>
        <EthWallet mnemonic={mnemonic} />
      </div>
    </div>
  );
}

export function SolanaWallet({ mnemonic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);

  const addSolanaWallet = () => {
    if (!mnemonic) return alert("Please generate a mnemonic first!");
    const seed = mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    setCurrentIndex(currentIndex + 1);
    setPublicKeys([...publicKeys, keypair.publicKey.toBase58()]);
  };

  return (
    <div>
      <button onClick={addSolanaWallet}>Add Solana Wallet</button>
      <div>
        {publicKeys.map((publicKey, index) => (
          <div key={index}>Solana - {publicKey}</div>
        ))}
      </div>
    </div>
  );
}

export const EthWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  const addEthWallet = async () => {
    if (!mnemonic) return alert("Please generate a mnemonic first!");
    const seed = await mnemonicToSeed(mnemonic);
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);

    setCurrentIndex(currentIndex + 1);
    setAddresses([...addresses, wallet.address]);
  };

  return (
    <div>
      <button onClick={addEthWallet}>Add ETH Wallet</button>
      <div>
        {addresses.map((address, index) => (
          <div key={index}>ETH - {address}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
