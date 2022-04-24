import { createApp } from 'vue'
import App from './App.vue'
// App router
import router from './router/router'
// App Base Style
import '/@/styles/base/index.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
