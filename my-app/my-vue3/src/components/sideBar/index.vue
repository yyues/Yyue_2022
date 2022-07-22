<template>
  <el-menu
    :collapse="isCollapse"
    @select="handleClick"
    :collapse-transition="false"
    :default-active="$route.path"
  >
    <sideBarItem :router="routers" />
  </el-menu>
</template>
<script lang="ts">
import { reactive } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { computed } from '@vue/runtime-core'
import sideBarItem from './sideBarItem.vue'
import { useStore } from '/@/store/store'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const isCollapse = computed(() => store.state.app.isCollapse)
    const CollapseMenuWidth = computed(() => `${store.state.app.CollapseMenuWidth}px`)
    const paddingLeft = computed(() => `${(store.state.app.CollapseMenuWidth - 24) / 2}px`)
    const routers = reactive([
      {
        path: '/dashBoard',
        name: '首页',
        children: [],
        icon: 'Edit',
        svg: false
      }
    ])

    const handleClick = path => {
      // console.log(e)
      // router.push(path)
    }
    return {
      isCollapse,
      route,
      router,
      routers,
      handleClick,
      paddingLeft,
      CollapseMenuWidth
    }
  }
}
</script>
<style lang="scss" scoped>
:deep(.el-menu-tooltip__trigger) {
  padding-right: 0;
  padding-left: v-bind(paddingLeft);
  width: v-bind(CollapseMenuWidth);
}
</style>
