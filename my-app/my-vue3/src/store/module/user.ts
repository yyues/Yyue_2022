import { Module } from 'vuex'
import { UserState, RootState } from '../typing'
import { AsyncRoute } from '/@/router/type'
export const user: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    userInfo: {},
    userMenu: []
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setUserMenu(state, payload: AsyncRoute[]) {
      state.userMenu = payload
    }
  },
  actions: {
    async GetUserInfo({ commit }) {
      await commit('setUserInfo', {})
    },
    async GetUserMenu({ commit }) {
      await commit('setUserMenu', [])
    }
  }
}
