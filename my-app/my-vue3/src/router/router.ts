import { createRouter, createWebHistory } from 'vue-router'
import { Route } from './type'

const routes: Route[] = [
  {
    path: '/login',
    component: () => import('/@/views/login/login.vue'),
    meta: {}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
