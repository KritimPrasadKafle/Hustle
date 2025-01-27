const { Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey } = require('@solana/web3.js');

const connection = new Connection(clusterApiUrl('devnet'));

async function airdrop(publickey, amount) {
  const airdropSignature = await connection.requestAirdrop(new PublicKey(publickey), amount);
  await connection.confirmTransaction({ signature: airdropSignature })
}

airdrop("4hQdUcuxJz7jnN5K8bAPXCo8spdh5jPXrSDwLMnovMzD", LAMPORTS_PER_SOL).then(signature => {
  console.log('Airdrop signature:', signature);
})