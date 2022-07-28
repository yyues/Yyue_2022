<template>
  <router-view v-slot="{ Component, route }">
    <!-- el-config-provider -->
    <el-config-provider size="default">
      <!-- 使用任何自定义过渡和回退到 `fade` -->
      <transition :name="route.meta.transition || 'el-fade-in'" appear>
        <!-- 控制组件是否被销毁 -->
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component" />
      </transition>
    </el-config-provider>
  </router-view>
</template>
<script lang="ts">
import { onMounted } from 'vue'
import { useStore } from './store/store'
export default {
  setup() {
    const store = useStore()
    onMounted(() => {
      //  开局 获取菜单
      store.dispatch('user/GetUserMenu')
      // 移除 loading 动画
      ;(document.getElementById('loading') as HTMLElement).remove()
      window.addEventListener('beforeunload', () => {
        // 监听刷新 事件处理
        store.dispatch('app/onLoad')
      })
    })
  }
}
</script>
