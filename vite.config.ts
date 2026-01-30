import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig({
  // For GitHub Pages: use your repo name, e.g. base: '/content-playbook-microsite/'
  // For Netlify/Vercel or custom domain root: use base: '/'
  base: '/',
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
