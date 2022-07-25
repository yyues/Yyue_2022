import { Module } from 'vuex'
import { UserState, RootState } from '../typing'

// 动态 Menu
import { AsyncBaseRoute } from '/@/router/type'

import router from '/@/router/router'
import { filterRouters } from '/@/utils/utils'
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
      payload.forEach(item => router.addRoute(item))
    }
  },
  actions: {
    async GetUserInfo({ commit }) {
      await commit('setUserInfo', {})
    },
    async GetUserMenu({ commit }) {
      // 自定义 假数据
      const route: AsyncBaseRoute[] = [
        {
          path: '/info',
          name: 'Info',
          children: [],
          componentName: '/demo/info',
          icon: 'Camera',
          customSvg: false
        },
        {
          path: '/about',
          name: 'About',
          children: [],
          icon: 'Basketball',
          customSvg: false,
          componentName: '/demo/about'
        }
      ]
      const data = filterRouters(route)
      await commit('setUserMenu', data)
    }
  }
}
