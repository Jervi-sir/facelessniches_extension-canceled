import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist',
    watch: {},
    rollupOptions: {
      input: {
        main: 'src/main.tsx',
        content: 'src/content.ts',
        background: 'src/background.ts',
      },
      output: {
        entryFileNames: 'scripts/[name].js',
      },
    },
  },
});
