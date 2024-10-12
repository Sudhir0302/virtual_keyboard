import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    host: true, 
    port: 3000, 
    proxy: {
      '/ws': {
        target: 'ws://192.168.38.51:3333', 
        ws: true,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
