import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    strictPort: false,
    allowedHosts: [
      '.onrender.com', // 👈 allow all subdomains of onrender.com
      'localhost'      // 👈 still allow localhost for development
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    strictPort: false,
    allowedHosts: [
      '.onrender.com',
      'localhost'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
