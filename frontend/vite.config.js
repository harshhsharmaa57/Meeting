import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  optimizeDeps: {
    exclude: ['socket.io-adapter', 'base64id']
  },
  resolve: {
    alias: {
      crypto: false
    }
  }
})
