import { createMint, getAccount, getMint, getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

const payer = Keypair.generate();
const mintAuthority = Keypair.generate();
const freezeAuthority = Keypair.generate();

console.log(payer.publicKey.toString());

const connection = new Connection(
  "https://api.devnet.solana.com",
  'confirmed'
);

const airdropSignature = await connection.requestAirdrop(payer.publicKey,
  LAMPORTS_PER_SOL
)

await connection.confirmTransaction(airdropSignature);

console.log("Payer account funded successfully!");

const mint = await createMint(
  connection,
  payer,
  mintAuthority.publicKey,
  freezeAuthority.publicKey,
  9
);
const mintInfo = await getMint(
  connection, mint
)
const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  payer,
  mint,
  payer.publicKey
)
const tokenAccountInfo = await getAccount(
  connection, tokenAccount.address
)

await mintTo(
  connection,
  payer,
  mint,
  tokenAccount.address,
  mintAuthority,
  1000000000
)

const mintIInfo = await getMint(
  connection, mint
);
console.log(mintIInfo.supply);

const tokenAccountInfos = await getAccount(
  connection, tokenAccount.address
)
console.log(tokenAccountInfos);


console.log(tokenAccountInfo.amount);


console.log(tokenAccount.address.toBase58());


console.log(mintInfo.supply);

console.log(mint.toBase58());
