import { RouteRecordRaw } from 'vue-router'

export interface RootState {
  [x: string]: any
  user?: any
  count: number
}
export interface AppState {
  CollapseWidth: number
  HiddenWidth: number
  CollapseMenuWidth: number
  isCollapse: boolean
  isHidden: boolean
  isOpen: boolean
  isWeb: boolean
  isApp: boolean
  isPad: boolean
  isLoad: boolean
}
export interface ColorState {
  menu: {
    MenuBackColor?: string
    MenuActiveColor?: string
    TextColor?: string
    TextActiveColor?: string
    HoverColor?: string
    height?: string
    lineHeight?: string
  }
}
export interface UserState {
  userInfo: {
    [x: string]: any
  }
  userMenu: RouteRecordRaw[]
}
export enum SizeType {
  isWeb = 'isWeb',
  isPad = 'isPad',
  isApp = 'isApp'
}
export interface AllState extends RootState {
  app: AppState
  color: ColorState
  user: UserState
}
