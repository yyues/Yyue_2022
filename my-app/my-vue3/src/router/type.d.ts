import { Component } from 'vue'
interface Route {
  path: string
  component: Component
  children?: Route[]
  meta: {
    title?: string
  }
}
