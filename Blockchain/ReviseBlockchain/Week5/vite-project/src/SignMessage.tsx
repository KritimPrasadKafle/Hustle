import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import React, { useState } from "react";

interface SignMessageProps {
  className?: string;
}

export function SignMessage({ className }: SignMessageProps) {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!publicKey) {
        throw new Error("Please connect your wallet first");
      }
      if (!signMessage) {
        throw new Error("Your wallet doesn't support message signing");
      }
      if (!message.trim()) {
        throw new Error("Please enter a message to sign");
      }

      setIsLoading(true);
      setStatus({ type: null, text: "" });

      const encodedMessage = new TextEncoder().encode(message);
      const signature = await signMessage(encodedMessage);

      const isValid = ed25519.verify(
        signature,
        encodedMessage,
        publicKey.toBytes()
      );
      if (!isValid) {
        throw new Error("Signature verification failed");
      }

      const signatureBs58 = bs58.encode(signature);
      setStatus({
        type: "success",
        text: `Message signed successfully!\nSignature: ${signatureBs58}`,
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <form onSubmit={handleSignMessage} className="flex flex-col gap-2">
        <input
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message to sign"
          disabled={isLoading}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !publicKey}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Signing..." : "Sign Message"}
        </button>
      </form>

      {status.type && (
        <div
          className={`p-3 rounded-md ${
            status.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <p className="whitespace-pre-wrap break-all text-sm">{status.text}</p>
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

        /* Optional: Add a max height and scroll if needed */
        p {
          max-height: 200px;
          overflow-y: auto;
          padding-right: 8px;
        }

        /* Improve readability with subtle styling */
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
