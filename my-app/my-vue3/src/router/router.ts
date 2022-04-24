import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized
} from 'vue-router'
import { Route } from './type'
import Home from '/@/views/home/home.vue'

const routes: Route[] = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Home',
      keepAlive: true
    }
  },
  {
    path: '/login',
    component: () => import('/@/views/login/login.vue'),
    meta: {
      title: 'User Login',
      keepAlive: false
    }
  },
  {
    path: '/404',
    component: () => import('/@/views/sys/404.vue'),
    meta: {
      title: 'Page Not Found',
      keepAlive: false
    }
  },
  {
    path: '/405',
    component: () => import('/@/views/sys/405.vue'),
    meta: {
      title: 'Page Not Permission',
      keepAlive: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
// 路由前置守卫，实现 信息校验和 title 设置
const beforeRouter = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: Function
): void => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
}

router.beforeEach(beforeRouter)
export default router
