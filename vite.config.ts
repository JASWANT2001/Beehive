import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // Keep the framework in its own long-lived chunk so app changes
            // don't invalidate it in the browser cache.
            manualChunks: { react: ['react', 'react-dom', 'react-router-dom'] },
          },
        },
  },
}))
