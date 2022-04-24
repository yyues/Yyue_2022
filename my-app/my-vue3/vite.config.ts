import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { VitePWA } from 'vite-plugin-pwa'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue() //VitePWA()
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  }
})
