import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project01: resolve(__dirname, 'project01.html'),
        project02: resolve(__dirname, 'project02.html'),
        project03: resolve(__dirname, 'project03.html'),
        project04: resolve(__dirname, 'project04.html'),
        project05: resolve(__dirname, 'project05.html'),
      }
    }
  }
})
