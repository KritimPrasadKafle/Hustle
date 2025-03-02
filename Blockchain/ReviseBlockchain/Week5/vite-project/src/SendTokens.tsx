import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

interface SendTokensProps {
  className?: string;
}

export function SendTokens({ className }: SendTokensProps) {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null;
    message: string;
  }>({ type: null, message: "" });

  const isValidPublicKey = (address: string): boolean => {
    try {
      new PublicKey(address);
      return true;
    } catch {
      return false;
    }
  };

  const handleSendTokens = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({ type: "loading", message: "Processing transaction..." });

    try {
      if (!publicKey) throw new Error("Please connect your wallet first");
      if (!sendTransaction)
        throw new Error("Wallet doesn’t support transactions");
      if (!toAddress.trim())
        throw new Error("Please enter a recipient address");
      if (!isValidPublicKey(toAddress))
        throw new Error("Invalid recipient address");
      if (!amount.trim()) throw new Error("Please enter an amount");

      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        throw new Error("Please enter a valid amount greater than 0");
      }

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(toAddress),
          lamports: Math.floor(parsedAmount * LAMPORTS_PER_SOL),
        })
      );

      const signature = await sendTransaction(transaction, connection, {
        skipPreflight: false,
        preflightCommitment: "confirmed",
      });

      const confirmation = await connection.confirmTransaction(
        signature,
        "confirmed"
      );
      if (confirmation.value.err) throw new Error("Transaction failed");

      setStatus({
        type: "success",
        message: `Successfully sent ${parsedAmount} SOL to ${toAddress}\nTransaction signature: ${signature}`,
      });
      setToAddress("");
      setAmount("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      });
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <form onSubmit={handleSendTokens} className="flex flex-col gap-3">
        <input
          id="to"
          type="text"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
          placeholder="Recipient address"
          disabled={status.type === "loading"}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        <input
          id="amount"
          type="number"
          step="0.0001"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in SOL"
          disabled={status.type === "loading"}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          type="submit"
          disabled={status.type === "loading" || !publicKey}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {status.type === "loading" ? "Sending..." : "Send SOL"}
        </button>
      </form>

      {status.message && (
        <div
          className={`p-3 rounded-md ${
            status.type === "success"
              ? "bg-green-100 text-green-800"
              : status.type === "error"
              ? "bg-red-100 text-red-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          <p className="whitespace-pre-wrap break-all text-sm">
            {status.message}
          </p>
        </div>
      )}

      <style jsx>{`
        .break-all {
          word-break: break-all;
          overflow-wrap: break-word;
          max-width: 100%;
        }
        .text-sm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        p {
          max-height: 200px;
          overflow-y: auto;
          padding-right: 8px;
        }
        p::-webkit-scrollbar {
          width: 6px;
        }
        p::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
