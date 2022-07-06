<template>
  <el-menu
    :collapse="isCollapse"
    @select="handleClick"
    :collapse-transition="false"
    :default-active="$router.path"
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
import { useRouter } from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const isCollapse = computed(() => store.state.app.isCollapse)
    const routers = reactive([
      {
        path: '/dashBoard',
        name: '首页',
        children: [],
        icon: 'Edit'
      }
    ])

    const handleClick = path => {
      // console.log(e)
      // router.push(path)
    }
    return {
      isCollapse,
      routers,
      handleClick
    }
  }
}
</script>
