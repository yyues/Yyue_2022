import { debounce } from 'lodash'

import { AsyncBaseRoute, AsyncRoute } from '/@/router/type'
type FilterRouter = (arr: AsyncBaseRoute[], redirect?: string) => AsyncRoute[]

export const filterRouters: FilterRouter = arr => {
  if (arr.length == 0) return arr as AsyncRoute[]
  let newArr: AsyncRoute[] = []
  for (let index = 0; index < arr.length; index++) {
    const { name = '', children = [], icon = 'Apple', customSvg = false, path, componentName, redirect = '/' } = arr[index]
    newArr.push({
      path,
      redirect,
      component: () => import(/* @vite-ignore */ `/@/views/${componentName}.vue`),
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
