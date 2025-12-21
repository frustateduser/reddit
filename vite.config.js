import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Proxy client requests starting with /api/reddit to reddit.com
      '/api/reddit': {
        target: 'https://www.reddit.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/reddit/, ''),
      },
    },
  },
})
