import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom'
  },
  plugins: [vue()],
  base: '/github-actions-deploy-dynamic/',
  resolve: {
    alias: {
      '@': `/src`
    }
  }
})
