import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Buffer } from "buffer";
import process from "process";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: "buffer",
      process: "process/browser",
      stream: "stream-browserify",
      crypto: "crypto-browserify",
      util: "util",
    },
  },
  define: {
    global: "globalThis",
    "global.Buffer": "Buffer",
    "process.env": "{}", // Add minimal process.env polyfill
  },
});
