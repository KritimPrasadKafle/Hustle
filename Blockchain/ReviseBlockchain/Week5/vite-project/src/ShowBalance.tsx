import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowSolBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    async function getBalance() {
      if (wallet.publicKey) {
        try {
          const lamports = await connection.getBalance(wallet.publicKey);
          const solBalance = lamports / LAMPORTS_PER_SOL;
          setBalance(solBalance);
        } catch (error) {
          console.error("Failed to fetch balance:", error);
          setBalance(null);
        }
      } else {
        setBalance(null);
      }
    }

    getBalance();
    // Re-run when wallet or connection changes
  }, [wallet.publicKey, connection]);

  return (
    <div>
      <p>
        SOL Balance: {balance !== null ? balance.toFixed(2) : "Connect wallet"}
      </p>
    </div>
  );
}
