import 'vue-router'
import { Component } from 'vue'
import { RouteMeta } from 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    // title 标题
    title: string
    // 是否使组件不被注销
    keepAlive?: boolean
    // 组件过渡动画
    transition?: string
  }
}

export interface Route {
  path: string
  component: Component
  children?: Route[]
  meta: RouteMeta
}

export interface AsyncRoute {
  path: string
  component?: Component
  children?: Route[]
  customSvg?: boolean
  icon?: string
  name?: string
  meta?: RouteMeta
}
