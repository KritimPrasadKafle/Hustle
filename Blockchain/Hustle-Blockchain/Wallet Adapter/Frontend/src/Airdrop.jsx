import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  const wallet = useWallet(); // Access wallet functionality
  const { connection } = useConnection(); // Access connection

  // Ensure wallet is connected and publicKey exists
  if (!wallet.connected || !wallet.publicKey) {
    return <div>Please connect your wallet to request an airdrop.</div>;
  }

  async function sendAirdropToUser() {
    try {
      // Request airdrop of 10 lamports (10 SOL)
      const amount = document.getElementById("amount");
      const signature = await connection.requestAirdrop(wallet.publicKey, amount * 1e9);
      await connection.confirmTransaction(signature);
      alert("Airdrop successful!");
    } catch (error) {
      console.error("Airdrop error:", error);
      alert("Airdrop failed. Please try again.");
    }
  }

  return (
    <div>
      <h2>Wallet: {wallet.publicKey.toString()}</h2>
      <input id="amount" type="text" placeholder="amount" />
      <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  );
}
