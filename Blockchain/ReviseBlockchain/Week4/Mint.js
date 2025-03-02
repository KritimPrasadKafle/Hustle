const { createMint, getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');
// Imports specific functions from the Solana SPL (Solana Program Library) Token package:
// - createMint: Creates a new token type (like defining a coin).
// - getOrCreateAssociatedTokenAccount: Gets or creates an account to hold tokens for a wallet.
// - mintTo: Mints (creates) new tokens and sends them to a token account.

const { Keypair, Connection, clusterApiUrl, TOKEN_PROGRAM_ID, PublicKey } = require('@solana/web3.js');
// Imports from Solana’s core library:
// - Keypair: Generates or loads a public/private key pair (like a wallet).
// - Connection: Connects to a Solana network (e.g., devnet).
// - clusterApiUrl: Provides URLs for Solana clusters (mainnet, devnet, testnet).
// - TOKEN_PROGRAM_ID: The address of the SPL Token program on Solana.
// - PublicKey: Represents a public key as an object.

const payer = new Keypair();

// Creates a Keypair (wallet) from a hardcoded secret key (64 bytes).
// - payer: The account paying for transaction fees and token creation.
// - Uint8Array.from: Converts the array of numbers into a byte array for the secret key.
// - This is your “funding wallet” with SOL to cover costs.

const mintAuthority = payer;
// Sets the mintAuthority (who can mint tokens) to the same Keypair as the payer.
// - mintAuthority: The account allowed to create new tokens (can be separate from payer).

const connection = new Connection(clusterApiUrl('devnet'));
// Establishes a connection to Solana’s devnet (a test network).
// - clusterApiUrl('devnet'): Returns https://api.devnet.solana.com.
// - Connection: Manages communication with the Solana blockchain (like a Web3 provider in Ethereum).

async function createMintForToken(payer, mintAuthority) {
  // Defines an async function to create a new token mint.
  const mint = await createMint(
    connection,       // The Solana network connection.
    payer,            // The account paying for the transaction (needs SOL).
    mintAuthority,    // The public key allowed to mint tokens.
    null,             // Freeze authority (null means no one can freeze tokens).
    6,                // Decimals (6 means 1 token = 1,000,000 smallest units).
    TOKEN_PROGRAM_ID  // The SPL Token program’s ID (standard for Solana tokens).
  );
  // Creates a new token mint and returns its public key.
  console.log('Mint created at', mint.toBase58());
  // Logs the mint’s address in base58 format (Solana’s human-readable key format).
  return mint;
  // Returns the mint object (a PublicKey) for use in minting tokens.
}

async function mintNewTokens(mint, to, amount) {
  // Defines an async function to mint tokens to a specific address.
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,         // Network connection.
    payer,             // Pays for creating the token account if needed.
    mint,              // The token mint (which token type to hold).
    new PublicKey(to)  // The recipient’s public key (where tokens go).
  );
  // Gets or creates an Associated Token Account (ATA) for the recipient.
  // - ATA: A special account tied to a wallet and token type to hold tokens.
  console.log('Token account created at', tokenAccount.address.toBase58());
  // Logs the ATA’s address.

  await mintTo(
    connection,          // Network connection.
    payer,              // Pays for the minting transaction.
    mint,               // The token mint to create tokens from.
    tokenAccount.address, // The ATA to receive the tokens.
    payer,              // The mint authority (who signs to authorize minting).
    amount              // Amount to mint (e.g., 100 tokens, adjusted by decimals).
  );
  // Mints the specified amount of tokens to the token account.
  console.log('Minted', amount, 'tokens to', tokenAccount.address.toBase58());
  // Logs the minting result.
}

async function main() {
  // Main async function to run the script.
  const mint = await createMintForToken(payer, mintAuthority.publicKey);
  // Creates a new token mint; passes payer and its public key as mint authority.
  await mintNewTokens(mint, mintAuthority.publicKey, 100);
  // Mints 100 tokens to the payer’s associated token account.
}

main();
// Runs the main function.