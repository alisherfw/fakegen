import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'dist', // make sure it's 'dist' if you're targeting frontend/dist
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
