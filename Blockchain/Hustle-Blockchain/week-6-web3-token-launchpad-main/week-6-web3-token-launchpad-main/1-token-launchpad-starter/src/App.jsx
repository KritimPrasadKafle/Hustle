import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function App() {
  return (

    <ConnectionProvider endpoint="https://api.devet.solana.com">
      <WalletProvider wallets={[]}>
        <WalletModalProvider>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 20
          }}>

            <WalletMultiButton />
            <WalletDisconnectButton />

          </div>
          <TokenLaunchpad></TokenLaunchpad>
        </WalletModalProvider>
      </WalletProvider>

    </ConnectionProvider>
  )
}

export default App;
