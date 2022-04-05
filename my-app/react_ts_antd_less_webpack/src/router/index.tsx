import React, { ReactNode, lazy } from 'react'
// 导入登录
const Login = lazy(() => import('../pages/Login'))
const ErrThree = lazy(() => import('../pages/403'))
const ErrFour = lazy(() => import('../pages/404'))
const Dashboard = lazy(() => import('../Layout/Layout'))
interface MyRouter {
  title: string
  path?: string
  key: string /* 用来循环判断的 */
  component?: ReactNode
  exact?: boolean
  children?: MyRouter[]
}
const router: MyRouter[] = [
  {
    path: '/',
    title: '控制台',
    key: 'dashboard',
    component: <Dashboard />
  },
  {
    path: '/login',
    title: '登录',
    key: 'login',
    component: <Login />
  },
  {
    path: '/403',
    title: '403',
    key: 'Err_403',
    component: <ErrThree />
  },
  {
    path: '/404',
    title: '404',
    key: 'Err_404',
    component: <ErrFour />
  }
]

export default router
