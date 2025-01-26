import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@emotion/styled': '@emotion/styled/dist/emotion-styled.cjs.js',
    },
    optimizeDeps: {
      include: ['@emotion/styled', '@mui/styled-engine']
    }
  },
});
