<template>
  <el-container class="my-layout">
    <el-header :height="height" class="my-header">
      <slot name="header"></slot>
    </el-header>
    <el-container class="my-content">
      <template v-if="hasAside">
        <!-- has aside -->
        <el-aside
          :class="['my-aside', { 'is-collapse': isCollapse }, { 'is-hidden': isHidden }]"
          :width="width"
        >
          <slot name="aside"></slot>
        </el-aside>
        <el-main class="my-main">
          <slot></slot>
        </el-main>
      </template>
      <template v-else>
        <el-main class="my-main">
          <slot></slot>
        </el-main>
      </template>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { ref, computed } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { debounce } from 'lodash'
import { defineComponent } from 'vue'
import { useStore } from '/@/store/store'

export default defineComponent({
  props: {
    height: {
      type: String,
      default: '60px'
    },
    hasAside: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const width = ref<string>('200px')
    const isCollapse = computed(() => store.state.app.isCollapse)
    const isHidden = computed(() => store.state.app.isHidden)
    const store = useStore()
    const CollapseWidth = computed(() => store.state.app.CollapseWidth)
    const HiddenWidth = computed(() => store.state.app.HiddenWidth)
    const handleResize = (): void => {
      let isCollapse = false,
        isHidden = false
      if (window.innerWidth > CollapseWidth.value) {
        isCollapse = false
        isHidden = false
      }
      if (window.innerWidth < CollapseWidth.value && window.innerWidth > HiddenWidth.value) {
        isCollapse = true
        isHidden = false
      }
      if (window.innerWidth < HiddenWidth.value) {
        isCollapse = false
        isHidden = true
      }
      store.commit('app/setIsHidden', isHidden)
      store.commit('app/setIsCollapse', isCollapse)
    }
    // 初始化 isCollapse isHidden Status
    handleResize()
    onMounted(() => {
      // 监听 窗口折叠
      window.addEventListener('resize', debounce(handleResize, 150))
    })
    return {
      width,
      isCollapse,
      isHidden
    }
  }
})
</script>
