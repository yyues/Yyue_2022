<template>
  <myContainer>
    <template #aside>
      <sideBar />
    </template>
    <Table :header="columns" :data="tableData" hasSelection hasIndex />
  </myContainer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessage } from 'element-plus'
import sideBar from '/@/components/sideBar/index.vue'
import Table from '/@/module/Table/index.vue'
export default defineComponent({
  components: { sideBar, Table },
  setup() {
    const handleClick = (): void => {
      ElMessage('this is a message.')
    }
    const columns = ref([
      { prop: 'a', label: '状态' },
      { prop: 'b', label: '单元编号' },
      { prop: 'c', label: '楼层' },
      { prop: 'd', label: '面积(㎡)' },
      { prop: 'e', label: '单价(元/㎡/天)' },
      { prop: 'f', label: '用途' }
    ])
    const tableData = ref([
      {
        a: '2016-05-03',
        b: 'Tom',
        c: 'No. 189, Grove St, Los Angeles',
        d: '2016-05-03',
        e: 'Tom',
        f: 'No. 189, Grove St, Los Angeles'
      },
      {
        a: '2016-05-03',
        b: 'Tom',
        c: 'No. 189, Grove St, Los Angeles',
        d: '2016-05-03',
        e: 'Tom',
        f: 'No. 189, Grove St, Los Angeles'
      },
      {
        a: '2016-05-03',
        b: 'Tom',
        c: 'No. 189, Grove St, Los Angeles',
        d: '2016-05-03',
        e: 'Tom',
        f: 'No. 189, Grove St, Los Angeles'
      }
    ])
    return {
      handleClick,
      columns,
      tableData
    }
  }
})
</script>
