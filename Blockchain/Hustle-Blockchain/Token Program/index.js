import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';

const payer = Keypair.generate();

const connection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed'
);

const airdropSignature = await connection.requestAirdrop(
  payer.publicKey,
  LAMPORTS_PER_SOL,
);

await connection.confirmTransaction(airdropSignature);

console.log("Airdrop successful!");