import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import envCompatible from "vite-plugin-env-compatible";
dotenv.config()
export default defineConfig({
  plugins: [react(), envCompatible()],
    resolve: {
    alias: {
      src: "/src"
    }
  }
})
