const solanaWeb3 = require('@solana/web3.js');
const { log } = require('console');
const fs = require("fs");
const { Keypair, Connection, SystemProgram, Transaction, sendAndConfirmTransaction } = solanaWeb3;

const connection = new Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');

const dataAccount = Keypair.generate();

console.log(dataAccount.publicKey.toString());

const payer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync(`C:/Users/User/.config/solana/id.json`, "utf-8"))));

async function createAccount() {
  console.log(payer.publicKey.toString());

  const transaction = new Transaction().add(
    SystemProgram.createAccount({
      fromPubKey: payer.publicKey,
      newAccountPubkey: dataAccount.publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(1000),
      space: 1000,
      programId: SystemProgram.programId,

    })
  );

  try {
    const txId = await sendAndConfirmTransaction(connection, transaction, [payer, dataAccount]);
    console.log(`Created account with transaction Id: ${txId}`);
  } catch (error) {
    console.error(error);

  }
}

createAccount();
