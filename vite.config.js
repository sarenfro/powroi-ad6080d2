import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
    include: ['react', 'react-dom/client', 'react-leaflet', 'leaflet', 'lodash', 'recharts'],
  },
  server: {
    host: '::',
  },
});
