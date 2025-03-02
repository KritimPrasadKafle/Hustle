// WalletConnector.tsx
import { useState } from "react";
import {
  useWallet,
  WalletProvider,
  useConnection,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";

// Import the wallet adapter UI styles
import "@solana/wallet-adapter-react-ui/styles.css";

// Airdrop Component
const AirdropComponent = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [amount, setAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAirdrop = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!wallet.publicKey) {
      alert("Please connect your wallet first");
      return;
    }

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setIsLoading(true);
    try {
      const lamports = Number(amount) * 1e9;
      const signature = await connection.requestAirdrop(
        wallet.publicKey as PublicKey,
        lamports
      );

      const latestBlockHash = await connection.getLatestBlockhash();
      await connection.confirmTransaction({
        signature,
        ...latestBlockHash,
      });

      alert(`Successfully airdropped ${amount} SOL!`);
      setAmount("");
    } catch (error) {
      console.error("Airdrop error:", error);
      alert(
        `Airdrop failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="airdrop-container">
      <h2>Airdrop Request</h2>
      {wallet.connected && wallet.publicKey && (
        <p>Connected Wallet: {wallet.publicKey.toString()}</p>
      )}
      <form onSubmit={handleAirdrop}>
        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount in SOL"
            min="0"
            step="0.1"
            disabled={isLoading || !wallet.connected}
            required
          />
          <button type="submit" disabled={isLoading || !wallet.connected}>
            {isLoading ? "Processing..." : "Request Airdrop"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AirdropComponent;
