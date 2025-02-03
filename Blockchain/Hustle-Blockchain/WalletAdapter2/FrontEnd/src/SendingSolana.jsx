import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendTokens() {
    const to = document.getElementById("to");
    const amount = document.getElementById("amount");

    if (!to.value || !amount.value) {
      alert("Please fill in both fields.");
      return;
    }

    const recipient = new PublicKey(to.value);
    const transferAmount = parseFloat(amount.value);

    if (isNaN(transferAmount)) {
      alert("Please enter a valid amount.");
      return;
    }

    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: recipient,
        lamports: transferAmount * LAMPORTS_PER_SOL,
      })
    );

    try {
      await wallet.sendTransaction(transaction, connection);
      alert(`Sent ${amount.value} SOL to ${to.value}`);
    } catch (error) {
      alert("Transaction failed: " + error.message);
    }
  }

  return (
    <div className="send-tokens">
      <input type="text" id="to" placeholder="Recipient Address" />
      <input type="text" id="amount" placeholder="Amount (SOL)" />
      <button onClick={sendTokens}>Send</button>
    </div>
  );
}