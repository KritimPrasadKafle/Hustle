import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from '@solana/web3.js';


export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();


  function requestAirdrop() {
    alert('Hello there');
    const publicKey = wallet.publicKey;
    const amount = document.getElementById("amount").value;
    connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
    console.log('Airdrop requested');



  }
  return <div>
    <input id="amount" type="text" placeholder="Amount..." />
    <button onClick={requestAirdrop}>Requestairdrop</button>
  </div>
}