import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// PWA
import { VitePWA } from 'vite-plugin-pwa'
// Gzip
import viteCompression from 'vite-plugin-compression'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), VitePWA(), viteCompression()],
  resolve: {
    // 配置路径别名
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  }
})
