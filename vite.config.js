import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: '/',  // এখানে 'repository-name' আপনার GitHub রিপোজিটরির নাম হবে
  build: {
    outDir: 'dist',  // ভিউ প্রোজেক্টের বিল্ড ফোল্ডার
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
