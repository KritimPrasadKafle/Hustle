import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export function RequestAirDrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState("");

  async function requestAirDrop() {
    if (!wallet.publicKey) {
      alert("Please connect your wallet first!");
      return;
    }

    try {
      const signature = await connection.requestAirdrop(
        wallet.publicKey,
        parseFloat(amount) * LAMPORTS_PER_SOL
      );
      alert(`Airdrop requested: ${amount} SOL to ${wallet.publicKey.toBase58()}\nSignature: ${signature}`);
    } catch (error) {
      console.error(error);
      alert("Airdrop failed: " + error.message);
    }
  }

  return (
    <div>
      <br />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={requestAirDrop}>Request AirDrop</button>
    </div>
  );
}
