<template>
  <template v-for="{ name, icon, path, children } in router" :key="path">
    <el-sub-menu v-if="children.length !== 0" :index="path">
      <!-- <el-icon>{{icon}}</el-icon> -->
      <template #title>
        <span>{{ name }}</span>
      </template>
      <sideBarItem :router="children" />
    </el-sub-menu>
    <el-menu-item :index="path">
      <template #title>
        <!-- <el-icon>{{icon}}</el-icon> -->
        <span>{{ name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'sideBarItem',
  props: {
    router: {
      type: Object
    }
  },
  setup() {}
})
</script>
