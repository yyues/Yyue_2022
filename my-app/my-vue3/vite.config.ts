import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// PWA
import { VitePWA } from 'vite-plugin-pwa'
// Gzip
import viteCompression from 'vite-plugin-compression'
// Element-UI AutoImport Setting
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// Element-UI CSS Setting
import ElementPlus from 'unplugin-element-plus/vite'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VitePWA(),
    viteCompression(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
          // directives: true,
          // version: "2.1.5",
        })
      ]
    }),
    ElementPlus()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/@/styles/element/index.scss" as *;`
      }
    }
  },
  resolve: {
    // 配置路径别名
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  }
})
