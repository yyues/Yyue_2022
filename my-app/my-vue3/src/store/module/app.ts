import { Module } from 'vuex'
import { AppState, RootState, SizeType } from '../typing'

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state: {
    CollapseWidth: 896,
    HiddenWidth: 500,
    CollapseMenuWidth: 56,
    isCollapse: false,
    isHidden: false,
    isOpen: false,
    isWeb: false,
    isApp: false,
    isPad: false
  },
  mutations: {
    setCollapseWidth(state: AppState, payload: number) {
      state.CollapseWidth = payload
    },
    setHiddenWidth(state: AppState, payload: number) {
      state.HiddenWidth = payload
    },
    setIsCollapse(state: AppState, payload: boolean) {
      state.isCollapse = payload
    },
    setIsHidden(state: AppState, payload: boolean) {
      state.isHidden = payload
    },
    setIsOpen(state: AppState, payload: boolean) {
      state.isHidden = !payload
      state.isOpen = payload
    },
    setTypeBySizeAndKey(state: AppState, payload: { key: SizeType; value: boolean }) {
      state.isApp = state.isPad = state.isWeb = false
      state[payload.key] = payload.value
    }
  }
}
