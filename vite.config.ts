import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import envCompatible from "vite-plugin-env-compatible";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
dotenv.config()
export default defineConfig({
  plugins: [react(), envCompatible(),
    ViteImageOptimizer({
      webp: {
        lossless: true,
      },
      jpg: {
        quality: 100,
      },
    }),
  ],
    resolve: {
    alias: {
      src: "/src"
    }
  },
})
