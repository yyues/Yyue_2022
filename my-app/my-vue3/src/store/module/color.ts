import { Module } from 'vuex'
import { ColorState, RootState } from '../typing'
export const color: Module<ColorState, RootState> = {
  namespaced: true,
  state: {
    menu: {
      MenuActiveColor: '',
      MenuBackColor: '',
      TextActiveColor: '',
      TextColor: '',
      HoverColor: '',
      height: '',
      lineHeight: ''
    }
  },
  mutations: {
    setMeuActiveColor(state, payload) {
      state.menu.MenuActiveColor = payload
    },
    setMenuBackColor(state, payload) {
      state.menu.MenuBackColor = payload
    },
    setTextActiveColor(state, payload) {
      state.menu.TextActiveColor = payload
    },
    setTextColor(state, payload) {
      state.menu.TextColor = payload
    },
    setHoverColor(state, payload) {
      state.menu.HoverColor = payload
    }
  }
}
