import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://portfolio-monteiro-elise.vercel.app',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          i18n: ['i18next', 'react-i18next'],
          ui: ['@radix-ui/react-popover', 'react-icons'],
          utils: ['i18next-browser-languagedetector'],
        },
      },
    },
  },
});
