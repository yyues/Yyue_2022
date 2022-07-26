import 'vue-router'
import { Component } from 'vue'
import { RouteMeta } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    // title 标题
    title: string
    // 是否使组件不被注销
    keepAlive?: boolean
    // 组件过渡动画
    transition?: string
    // Icon
    icon?: string
    // Custom Icon
    customSvg?: boolean
  }
}

export interface Route {
  path: string
  redirect?: string
  component?: Component
  children?: RouteRecordRaw[]
  meta?: RouteMeta
}

export interface AsyncBaseRoute {
  path: string
  redirect?: string
  componentName?: string
  children?: AsyncBaseRoute[]
  customSvg?: boolean
  icon?: string
  name?: string
}
