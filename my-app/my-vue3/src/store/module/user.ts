import { Module } from 'vuex'
import { UserState, RootState } from '../typing'

// 动态 Menu
import { AsyncBaseRoute } from '/@/router/type'
import { RouteRecordRaw } from 'vue-router'
import { setRouteWithList } from "/@/utils/utils";
const { VITE_ADMIN_BASE_ROUTE } = import.meta.env

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
    setUserMenu(state, payload: RouteRecordRaw[]) {
      state.userMenu = payload
      setRouteWithList(payload)
      localStorage.setItem('UserMenu', JSON.stringify(payload))
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
          componentName: '/demo/ddd',
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
      const data = filterRouters(route, VITE_ADMIN_BASE_ROUTE)
      await commit('setUserMenu', data)
    }
  }
}
