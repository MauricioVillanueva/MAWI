import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      external: ['/dist/main.jsx'], // Agrega cualquier ruta que quieras excluir del bundle
    },
  },
});
