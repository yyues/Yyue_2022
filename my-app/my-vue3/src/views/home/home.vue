<template></template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  setup() {
    const handleClick = (): void => {
      ElMessage('this is a message.')
    }
    return {
      handleClick
    }
  }
})
</script>
