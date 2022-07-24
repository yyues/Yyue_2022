<template>
  <el-menu :collapse="isCollapse" @select="handleClick" :collapse-transition="false" :default-active="$route.path" :style="custom && styles">
    <sideBarItem :router="routers" />
  </el-menu>
</template>
<script lang="ts">
import { reactive, ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { computed } from '@vue/runtime-core'
import sideBarItem from './sideBarItem.vue'
import { useStore } from '/@/store/store'
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'LeftMenu',
  components: { sideBarItem },
  props: {
    custom: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const isCollapse = computed(() => store.state.app.isCollapse)
    const CollapseMenuWidth = computed(() => `${store.state.app.CollapseMenuWidth}px`)
    const paddingLeft = computed(() => `${(store.state.app.CollapseMenuWidth - 24) / 2}px`)
    // 定义 自定义颜色变量
    const MenuBackColor = computed(() => store.state.color.menu.MenuBackColor)
    const TextColor = computed(() => store.state.color.menu.TextColor)
    const TextActiveColor = computed(() => store.state.color.menu.TextActiveColor)
    const MenuHoverBgColor = computed(() => store.state.color.menu.HoverColor)
    const MenuHeight = computed(() => store.state.color.menu.height)
    const MenuLineHeight = computed(() => store.state.color.menu.lineHeight)
    // 通过 element 主题配置的 颜色变量修改

    const styles = ref(
      `--el-menu-bg-color: ${MenuBackColor.value};
       --el-menu-text-color:${TextColor.value};
       --el-menu-active-color: ${TextActiveColor.value};
       --el-menu-hover-bg-color: ${MenuHoverBgColor.value};
       --el-menu-item-height: ${MenuHeight.value};
       --el-menu-item-line-height:${MenuLineHeight.value};
      `
    )
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
      CollapseMenuWidth,
      MenuBackColor,
      TextColor,
      TextActiveColor,
      styles
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
