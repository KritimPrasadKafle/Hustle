import { Airdrop } from './Airdrop'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletConnectButton, WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui';

function App() {

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/I6wTZcNHtGEscXdj4vfwUwKEZgbKJLZ3"}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
          <div>
            <h1>Hello there</h1>
          </div>
          <Airdrop></Airdrop>

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
