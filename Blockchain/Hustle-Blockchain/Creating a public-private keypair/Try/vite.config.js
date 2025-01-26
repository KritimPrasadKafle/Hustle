import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react', // Ensure Emotion is set as the source for JSX
      babel: {
        plugins: ['@emotion/babel-plugin'], // Include Emotion Babel plugin
      },
    }),
  ],
  resolve: {
    alias: {
      '@emotion/styled': '@emotion/styled/dist/emotion-styled.cjs.js', // Correct path for styled
    },
    optimizeDeps: {
      include: ['@emotion/react', '@mui/styled-engine'], // Include necessary dependencies for optimization
    },
  },
});
