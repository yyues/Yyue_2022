// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
// 导入 app 及类型推断
import { app } from './module/app'
import { color } from './module/color'
import { user } from './module/user'
import { RootState, AllState } from './typing'
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  state: {
    count: 0
  },
  modules: {
    app,
    color,
    user
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore<T = AllState>() {
  return baseUseStore<T>(key)
}
