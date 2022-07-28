import { createRouter, createWebHistory, createWebHashHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

import { store } from '/@/store/store'
import BasePage from '/@/layout/base/index.vue'
import Home from '/@/views/home/home.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { setRouteWithList } from '/@/utils/utils'

const { VITE_WEB_HASH, VITE_APP_BASE_TITLE } = import.meta.env

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: BasePage,
    meta: {
      title: 'Yes',
      keepAlive: true
    }
  },
  {
    path: '/home',
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
    component: () => import('/@/views/sys/404/index.vue'),
    meta: {
      title: 'Page Not Found',
      keepAlive: false
    }
  },
  {
    path: '/405',
    component: () => import('/@/views/sys/405/index.vue'),
    meta: {
      title: 'Page Not Permission',
      keepAlive: false
    }
  }
]

const router = createRouter({
  history: !!VITE_WEB_HASH ? createWebHashHistory() : createWebHistory(),
  routes
})
const hasToken = true

// 路由前置守卫，实现 信息校验和 title 设置
const beforeRouter = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function): Promise<any> => {
  NProgress.start()
  if (to.meta.title) {
    document.title = VITE_APP_BASE_TITLE + ' | ' + to.meta.title
  }
  if (!hasToken && to.path !== '/login') {
    // 检测 登录
    next({
      path: '/login',
      query: {
        redirect: to.path
      }
    })
    return Promise.resolve()
  }
  const hasLoad = store.state.app.isLoad as boolean
  if (hasLoad && true) {
    await setRouteWithList(store.state.user.userMenu)
    store.commit('app/setIsLoad', false)
    next({ ...to })
    return Promise.resolve()
  }
  next()
}

router.beforeEach(beforeRouter)

router.afterEach(() => {
  NProgress.done()
})
export default router
