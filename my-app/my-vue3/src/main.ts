import { createApp } from 'vue'
import App from './App.vue'
// App router
import router from './router/router'
// App Base Style
import '/@/styles/base/index.scss'
// Store
import { store, key } from './store/store'

const app = createApp(App)

// 传入 injection key
app.use(store, key)
app.use(router)
app.mount('#app')
