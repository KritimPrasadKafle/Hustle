import './App.css'
import { Transaction, Connection, PublicKey, SystemProgram } from "@solana/web3.js"

function App() {

  async function sendSol() {
    const ix = SystemProgram.transfer({
      fromPubkey: new PublicKey("9Q6zQzZzZzZz"),
      toPubkey: new PublicKey("9Q6zQzZzZzZz"),
      lamports: 1000000000,


    })
    const tx = new Transaction().add(ix);

    //convert the transaction to a bunch of bytes

    const serializedTx = tx.serialize();
    await axios.post("/api/v1/tx/sign", {
      message: serializedTx,
      retry: false
    })
    console.log("Sending SOL...")
  }
  return (
    <>
      <input type="text" placeholder='Amount' />
      <input type="text" placeholder='Address' />
      <button onClick={sendSol}>Submit</button>

    </>
  )
}

export default App
