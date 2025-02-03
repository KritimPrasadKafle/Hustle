import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { RequestAirDrop } from './RequestAirDrop';

const wallets = [new PhantomWalletAdapter()];

export default function App() {
  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <RequestAirDrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
