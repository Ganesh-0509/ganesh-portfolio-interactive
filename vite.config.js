import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the build works on GitHub Pages
// project sites (https://user.github.io/repo/) as well as custom domains.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        // Split framer-motion into its own chunk so it caches separately.
        manualChunks: {
          motion: ['framer-motion'],
        },
      },
    },
  },
})
