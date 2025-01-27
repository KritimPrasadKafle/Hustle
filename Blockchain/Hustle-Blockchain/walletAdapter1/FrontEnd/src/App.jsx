import { useWallet } from '@solana/wallet-adapter-react';
import { useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop() {
    let amount = document.getElementById("amount").value;
    await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
    alert("Air dropped " + amount + " SOL to " + wallet.publicKey.toBase58());

  }

  async function getBalance() {
    if (wallet.publicKey) {

      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
  }

  const { publicKey, signMessage } = useWallet();

  async function onClick() {
    if (!publicKey) throw new Error('Wallet not connected!');
    if (!signMessage) throw new Error('Wallet does not support message signing!');

    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
    alert('success', `Message signature: ${bs58.encode(signature)}`);
  };

  async function sendTokens() {
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    const transaction = new Transaction();
    transaction.add(SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(to),
      lamports: amount * LAMPORTS_PER_SOL,
    }));

    await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
  }




  return <div>
    <br />
    <br />
    <input id="amount" type="text" placeholder="Amount" />
    <button onClick={requestAirdrop}>Request AirDrop</button>
    <p>SOL Balance:</p> <div id="balance"></div>
    <input id="message" type="text" placeholder="Message" />
    <button onClick={onClick}>
      Sign Message
    </button>
    <input id="to" type="text" placeholder="To" />
    <input id="amount" type="text" placeholder="Amount" />
    <button onClick={sendTokens}>Send</button>

  </div>
}