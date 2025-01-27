import { Connection, PublicKey } from '@solana/web3.js';
async function getTokens(walletAddress) {

  const connection = new Connection("https://api.mainnet-beta.solana.com");
  const publicKey = new PublicKey(walletAddress);

  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
    programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),

  });

  return tokenAccounts.value.map((account) => {
    const info = account.account.data.parsed.info;
    return {
      mint: info.mint,
      amount: info.tokenAmount.uiAmount,
    };
  });
}

const TokenList = ({ walletAddress }) => {
  const [tokens, setTokens] = useState([]);

  const fetchTokens = async () => {
    const data = await getTokens(walletAddress);
    setTokens(data);
  };

  return (
    <div className="p-4">
      <button onClick={fetchTokens} className="bg-blue-500 text-white p-2 rounded">
        Show Tokens
      </button>
      <table className="table-auto mt-4 w-full">
        <thead>
          <tr>
            <th>Token Address</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>{token.mint}</td>
              <td>{token.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};