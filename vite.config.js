import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    allowedHosts: [
      'casio-grade-wit-proper.trycloudflare.com',
      'localhost' // Mantén los hosts existentes
    ]
  }
})
