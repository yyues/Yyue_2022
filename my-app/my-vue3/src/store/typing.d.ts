export interface RootState {
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
}
export interface ColorState {
  menu: {
    MenuBackColor?: string
    MenuActiveColor?: string
    TextColor?: string
    TextActiveColor?: string
    HoverColor?: string
    height?: string
    lineHeight?:string
  }
}
export enum SizeType {
  isWeb = 'isWeb',
  isPad = 'isPad',
  isApp = 'isApp'
}
export interface AllState extends RootState {
  app: AppState
  color: ColorState
}
