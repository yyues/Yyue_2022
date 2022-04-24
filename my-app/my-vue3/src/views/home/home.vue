<template>
  <my-container></my-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'
import MyContainer from '/@/components/myContainer/myContainer.vue'
export default defineComponent({
  components: {
    MyContainer
  },
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
