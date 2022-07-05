<template>
  <myContainer>
    <template #aside>
      <sideBar />
    </template>
  </myContainer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'
import sideBar from '/@/components/sideBar/index.vue'
export default defineComponent({
  components: { sideBar },
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
