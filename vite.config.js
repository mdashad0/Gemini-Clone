import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 ensures paths work correctly when deployed
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
