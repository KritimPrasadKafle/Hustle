import { useWallet } from "@solana/wallet-adapter-react";

export function SignMessage() {
  const { publicKey, signMessage } = useWallet();

  async function onClick() {
    if (!publicKey) throw new Error("Wallet not connected");
    if (!signMessage) throw new Error("Sign message not implemented");

    const message = document.getElementById("message").value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if (!Ed25519Program.verify(signature, encodedMessage, publicKey.toBytes())) {
      throw new Error("Message signature invalid!");
    }
    alert(`Success: Message signature: ${bs58.encode(signature)}`);
  }

  return (
    <div className="sign-message">
      <input type="text" id="message" placeholder="Message" />
      <button onClick={onClick}>Sign Message</button>
    </div>
  );
}