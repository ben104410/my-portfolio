import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/<ben/", // Replace <repo-name> with your GitHub repo name
  plugins: [react()],
});
