import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://sudalai02.github.io/vite-react-users-crud/",
  plugins: [react()],
})
