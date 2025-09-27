import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.PORT || 3000,
    strictPort: false
  },
  preview: {
    host: true,
    port: process.env.PORT || 3000,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
