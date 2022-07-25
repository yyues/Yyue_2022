import { createApp } from 'vue'
import App from './App.vue'
// App router
import router from './router/router'
// App Base Style
import '/@/styles/base/index.scss'
// Store
import { store, key } from './store/store'
// SVG
import 'virtual:svg-icons-register'

const app = createApp(App)

// 传入 injection key
app.use(store, key)
app.use(router)
app.mount('#custom-app')

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import SvgIcon from '/@/module/SvgIcon/index.vue'
app.component('SvgIcon', SvgIcon)
