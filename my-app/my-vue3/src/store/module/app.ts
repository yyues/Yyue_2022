import { Module } from 'vuex'
import { AppState, RootState } from '../typing'

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state: {
    CollapseWidth: 896,
    HiddenWidth: 500,
    isCollapse: false,
    isHidden: false
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
    }
  }
}
