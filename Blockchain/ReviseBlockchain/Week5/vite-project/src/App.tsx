import React, { useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import AirdropComponent from "./AirDrop";
import { ShowSolBalance } from "./ShowBalance";
import { SignMessage } from "./SignMessage";
import "@solana/wallet-adapter-react-ui/styles.css"; // Required styles for wallet adapter UI
import { SendTokens } from "./SendTokens";
import { Buffer } from "buffer";
globalThis.Buffer = Buffer;

const App: React.FC = () => {
  // Network configuration
  const network = "devnet";
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // State management
  const [connectionError, setConnectionError] = useState<string | null>(null);

  // Custom connection configuration
  const connectionConfig = useMemo(
    () => ({
      commitment: "confirmed" as const,
      disableRetryOnRateLimit: false,
    }),
    []
  );

  // Available wallets (you can add specific wallets here if needed)
  const wallets = useMemo(() => [], []);

  return (
    <div className="app-wrapper">
      <ConnectionProvider endpoint={endpoint} config={connectionConfig}>
        <WalletProvider
          wallets={wallets}
          autoConnect={false}
          onError={(error: Error) => {
            setConnectionError(error.message);
            console.error("Wallet connection error:", error);
          }}
        >
          <WalletModalProvider>
            <div className="app-container">
              <header className="app-header">
                <h1>Solana Airdrop DApp</h1>
                <WalletMultiButton className="wallet-button" />
              </header>

              {connectionError && (
                <div className="error-message" role="alert">
                  <span>Error: {connectionError}</span>
                </div>
              )}

              <main className="app-main">
                <section className="component-section">
                  <AirdropComponent />
                </section>
                <section className="component-section">
                  <ShowSolBalance />
                </section>
                <section className="component-section">
                  <SignMessage />
                </section>
                <section className="component-section">
                  <SendTokens />
                </section>
              </main>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

      <style jsx global>{`
        :root {
          --primary-color: #4caf50;
          --error-color: #ff4444;
          --border-color: #eee;
          --background-color: #f5f5f5;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .app-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background-color: var(--background-color);
          padding: 20px;
        }

        .app-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .app-header h1 {
          font-size: 28px;
          color: #333;
        }

        .app-main {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .component-section {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .error-message {
          background-color: #ffe6e6;
          color: var(--error-color);
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 20px;
          text-align: center;
          border: 1px solid #ffcccc;
        }

        .wallet-button {
          /* Customize WalletMultiButton styles if needed */
        }

        button {
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s;
        }

        button:hover:not(:disabled) {
          background-color: #45a049;
        }

        button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
          opacity: 0.7;
        }

        input {
          padding: 10px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-size: 16px;
          width: 100%;
        }

        input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
        }
      `}</style>
    </div>
  );
};

export default App;
