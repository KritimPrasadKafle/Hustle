const { PublicKey } = require('@solana/web3.js');
const { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

const PDA = PublicKey.createProgramAddressSync(
  [userAddress.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenMintAddress.toBuffer(), Buffer.from([255])],
  ASSOCIATED_TOKEN_PROGRAM_ID,
);

console.log(`PDA: ${PDA}`);