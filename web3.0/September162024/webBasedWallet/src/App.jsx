import { useState } from 'react';
import './App.css';
import { generateMnemonic } from 'bip39';
import { SolanaWallet } from './SolanaWallet.jsx';
import { EthWallet } from './EthWallet.jsx';


function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div>
      <h1>Wallet Generator</h1>

      <button onClick={async function () {
        const mn = await generateMnemonic();
        setMnemonic(mn);
      }}>
        Create Seed Phrase
      </button>
      <input type="text" value={mnemonic} readOnly />

      <h2>Solana Wallet</h2>
      <SolanaWallet mnemonic={mnemonic} />

      <h2>Ethereum Wallet</h2>
      <EthWallet mnemonic={mnemonic} />
    </div>
  );
}

export default App;
