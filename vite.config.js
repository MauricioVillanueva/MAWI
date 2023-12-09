import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'canvas-chunk': ['SpaceShipCanvas', 'BallCanvas', 'ComputersCanvas', 'StarsCanvas'],
          'app-chunk': ['Hero', 'Navbar', 'About', 'Tech', 'Experience', 'Works', 'Feedbacks', 'Contact', 'CanvasLoader'],
        },
      },
    },
  },
});