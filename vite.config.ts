import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Repo is a GitHub *user* site (naliniprabhas.github.io), served from the
// domain root, so the base path stays '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
