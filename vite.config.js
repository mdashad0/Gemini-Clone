import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    strictPort: false,
    allowedHosts: [
      'gemini-clone-6-o87.onrender.com' // 👈 Add your Render domain here
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    strictPort: false,
    allowedHosts: [
      'gemini-clone-6-o87.onrender.com'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
