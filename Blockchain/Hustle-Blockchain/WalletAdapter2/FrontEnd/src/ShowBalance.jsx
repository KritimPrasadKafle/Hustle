import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { useState, useEffect } from "react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function ShowSolBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    }
    fetchBalance();
  }, [wallet.publicKey, connection]);

  return (
    <div className="show-sol-balance">
      <p>SOL Balance:</p>
      <div>{balance !== null ? `${balance} SOL` : "Loading..."}</div>
    </div>
  );
}