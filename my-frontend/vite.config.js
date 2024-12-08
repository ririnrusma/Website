import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": {
        target: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
})