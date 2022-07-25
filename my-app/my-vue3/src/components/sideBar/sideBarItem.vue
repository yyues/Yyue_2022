<template>
  <template v-for="{ path, children = [], meta: { title, icon, customSvg } } in router" :key="path">
    <el-sub-menu v-if="children.length !== 0" :index="path">
      <template #title>
        <el-icon v-if="!customSvg"><component :is="icon" /></el-icon>
        <SvgIcon v-else :name="icon" />
        <span>{{ title }}</span>
      </template>
      <sideBarItem :router="children" />
    </el-sub-menu>
    <el-menu-item :index="path">
      <el-icon v-if="!customSvg"><component :is="icon" /></el-icon>
      <SvgIcon v-else :name="icon" />
      <template #title>
        <span>{{ title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { AsyncRoute } from '/@/router/type'

export default defineComponent({
  name: 'sideBarItem',
  props: {
    router: {
      type: Object as PropType<AsyncRoute[]>,
      required: true
    }
  }
})
</script>
