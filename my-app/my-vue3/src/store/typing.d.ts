export interface RootState {
  count: number
}
export interface AppState {
  CollapseWidth: number
  HiddenWidth: number
  isCollapse: boolean
  isHidden: boolean
}

export interface AllState extends RootState {
  app: AppState
}
