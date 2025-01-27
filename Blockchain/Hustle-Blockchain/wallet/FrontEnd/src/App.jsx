import { useState } from "react";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair, Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import nacl from "tweetnacl";
import { Wallet, HDNodeWallet, ethers } from "ethers";
import "./App.css";

// Ethereum provider (use Holesky testnet)
const ethProvider = new ethers.JsonRpcProvider("https://eth-holesky.g.alchemy.com/v2/TQi0YMHi5IaogYHpVP0ljBK0V0R6iP8k");

// Solana connection (use devnet for testing)
const solanaConnection = new Connection("https://api.devnet.solana.com");

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
  const [wallets, setWallets] = useState([]);

  const addSolanaWallet = async () => {
    if (!mnemonic) return alert("Please generate a mnemonic first!");
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    // Fetch SOL balance
    const publicKey = keypair.publicKey.toString();
    const balance = await solanaConnection.getBalance(new PublicKey(publicKey));

    setCurrentIndex(currentIndex + 1);
    setWallets([...wallets, { publicKey, balance: balance / LAMPORTS_PER_SOL, keypair }]); // Convert lamports to SOL
  };

  const fundWallet = async (publicKey) => {
    try {
      // Request airdrop of 100 SOL (in lamports)
      const airdropSignature = await solanaConnection.requestAirdrop(
        new PublicKey(publicKey),
        100 * LAMPORTS_PER_SOL // 100 SOL
      );

      // Confirm the transaction
      await solanaConnection.confirmTransaction(airdropSignature);

      // Update the balance
      const updatedBalance = await solanaConnection.getBalance(new PublicKey(publicKey));
      setWallets((prevWallets) =>
        prevWallets.map((wallet) =>
          wallet.publicKey === publicKey
            ? { ...wallet, balance: updatedBalance / LAMPORTS_PER_SOL }
            : wallet
        )
      );

      alert("Wallet funded successfully!");
    } catch (error) {
      console.error("Error funding wallet:", error);
      alert("Failed to fund wallet. Please try again.");
    }
  };

  return (
    <div className="wallet-section">
      <button onClick={addSolanaWallet}>Add Solana Wallet</button>
      <div className="wallet-list">
        {wallets.map((wallet, index) => (
          <div key={index} className="wallet-item">
            <div>Solana - {wallet.publicKey}</div>
            <div>Balance: {wallet.balance} SOL</div>
            <button onClick={() => fundWallet(wallet.publicKey)}>Fund Wallet (100 SOL)</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export const EthWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wallets, setWallets] = useState([]);

  const addEthWallet = async () => {
    if (!mnemonic) return alert("Please generate a mnemonic first!");
    const seed = await mnemonicToSeed(mnemonic);
    const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(derivationPath);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);

    const balance = await ethProvider.getBalance(wallet.address);

    setCurrentIndex(currentIndex + 1);
    setWallets([...wallets, { address: wallet.address, balance: ethers.formatEther(balance) }]);
  };

  return (
    <div className="wallet-section">
      <button onClick={addEthWallet}>Add ETH Wallet</button>
      <div className="wallet-list">
        {wallets.map((wallet, index) => (
          <div key={index} className="wallet-item">
            <div>ETH - {wallet.address}</div>
            <div>Balance: {wallet.balance} ETH</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;