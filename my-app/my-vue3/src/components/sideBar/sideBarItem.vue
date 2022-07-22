<template>
  <template v-for="{ name, icon, path, children, svg } in router" :key="path">
    <el-sub-menu v-if="children.length !== 0" :index="path">
      <template #title>
        <el-icon v-if="!svg"><component :is="icon" /></el-icon>
        <SvgIcon v-else :name="icon" />
        <span>{{ name }}</span>
      </template>
      <sideBarItem :router="children" />
    </el-sub-menu>
    <el-menu-item :index="path">
      <el-icon v-if="!svg"><component :is="icon" /></el-icon>
      <SvgIcon v-else :name="icon" />
      <template #title>
        <span>{{ name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { computed } from '@vue/runtime-core'
import SvgIcon from '../../module/SvgIcon/index.vue'
export default defineComponent({
  name: 'sideBarItem',
  props: {
    router: {
      type: Object
    }
  },
  setup() {},
  components: { SvgIcon }
})
</script>
