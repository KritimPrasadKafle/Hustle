import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { RequestAirDrop } from './RequestAirDrop';
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ShowSolBalance } from './ShowBalance';
import { SignMessage } from './SignMessage';
import { SendTokens } from './SendingSolana';
import './App.css'; // Import the CSS file

const wallets = [new PhantomWalletAdapter()];

export default function App() {
  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="app-container">
            <div className="wallet-buttons">
              <WalletMultiButton className="wallet-button" />
              <WalletDisconnectButton className="wallet-button" />
            </div>
            <div className="components-container">
              <RequestAirDrop />
              <ShowSolBalance />
              <SignMessage />
              <SendTokens />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}