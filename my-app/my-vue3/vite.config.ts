// PWA
import { VitePWA, } from 'vite-plugin-pwa'
// Gzip
import viteCompression from 'vite-plugin-compression'

// Element-UI CSS Setting
import ElementPlus from 'unplugin-element-plus/vite'

const path = require('path')
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// SVG
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Inspect from 'vite-plugin-inspect'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    // 配置路径别名
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 9001
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/@/styles/element/index.scss" as *;`
      }
    }
  },
  plugins: [
    Vue(),
    viteCompression(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    }),

    Components({
      resolvers: [
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],

      dts: path.resolve(pathSrc, 'components.d.ts')
    }),

    Icons({
      autoInstall: true
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(__dirname, './src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first',

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__'
    }),

    // Inspect()
  ]
})
