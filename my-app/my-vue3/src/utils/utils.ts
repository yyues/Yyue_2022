import { debounce } from 'lodash'

import { AsyncBaseRoute } from '/@/router/type'
import { RouteRecordRaw } from 'vue-router'

export type FilterRouter = (arr: AsyncBaseRoute[], filePath: string, redirect?: string | undefined) => RouteRecordRaw[]

export const filterRouters: FilterRouter = (arr, filePath) => {
  if (arr.length == 0) return arr as RouteRecordRaw[]
  let newArr: RouteRecordRaw[] = []
  for (let index = 0; index < arr.length; index++) {
    const { name = '', children = [], icon = 'Apple', customSvg = false, path, componentName, redirect } = arr[index]
    newArr.push({
      path: filePath + path,
      redirect,
      children: filterRouters(children, path, redirect),
      component: () => import(/* @vite-ignore */ `/@/views/${componentName}.vue`).catch(() => import(/* @vite-ignore */ `/@/views/sys/404/index.vue`)),
      meta: {
        title: name,
        icon,
        customSvg,
        keepAlive: true
      }
    })
  }
  return newArr
}
import Layout from '/@/layout/admin/index.vue'
import router from '/@/router/router'
const { VITE_ADMIN_BASE_ROUTE, VITE_ADMIN_BASE_ROUTE_TITLE} = import.meta.env

export const setRouteWithList = (list: RouteRecordRaw[]) => {
  if (VITE_ADMIN_BASE_ROUTE) {
    const item = {
      path: VITE_ADMIN_BASE_ROUTE,
      component: Layout,
      children: list,
      meta: {
        title: VITE_ADMIN_BASE_ROUTE_TITLE,
        keepAlive: true
      }
    }
    router.addRoute(item)
  } else {
    for (let index = 0; index < list.length; index++) {
      const element = list[index]
      router.addRoute(element)
    }
  }
}