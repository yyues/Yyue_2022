<template>
  <el-table
    v-bind="$attrs"
    ref="leaseTable"
    highlight-current-row
    :data="data"
    border
    v-if="tableHeader.length !== 0"
    @selection-change="handleSelectionChange"
    @select-all="handleAllChange"
    @select="handleRowChange"
  >
    <el-table-column
      v-if="hasSelection"
      type="selection"
      :selectable="selectable"
      align="center"
      width="55"
    ></el-table-column>
    <el-table-column v-if="hasIndex" type="index" align="center" width="55"></el-table-column>
    <slot name="left" v-if="$slots.left"></slot>
    <slot
      v-for="{ name, key, prop, label, hidden, width, align, showTooltip, slot } in tableHeader"
      :key="key ?? prop"
      :name="slot ?? name ?? key ?? prop"
      :data="{ name, key, prop, label, hidden, width, align, showTooltip }"
    >
      <el-table-column
        v-if="!hidden"
        :key="name || key"
        :width="width"
        :align="align"
        :label="label"
        :prop="prop"
        :show-overflow-tooltip="showTooltip"
      ></el-table-column>
    </slot>
    <slot name="right" v-if="$slots.right" />
    <slot name="action" v-if="$slots.action" />
  </el-table>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs, reactive, ref } from 'vue';
interface iItem {
  key?: string;
  prop: string;
  label: string;
  width?: string;
  hidden?: string;
  showTooltip?: boolean;
  align?: string;
  name?: string;
  slot?: string;
}
export default defineComponent({
  name: 'leaseTable',
  inheritAttrs: false,
  props: {
    header: {
      type: Array as PropType<iItem[]>,
      required: true,
    },
    data: Object as PropType<any[]>,
    hasSelection: {
      type: Boolean,
      default: false,
    },
    hasIndex: {
      type: Boolean,
      default: false,
    },
    selectable: Function as PropType<(row: any, index: number) => boolean>,
  },
  emits: ['selection-change', 'row-change', 'select-all'],
  setup(props, content) {
    // Table Ref
    const leaseTable = ref(null);
    const { header } = toRefs(props);
    const tableHeader = reactive<iItem[]>(header.value as iItem[]);
    /**
     * @param {Object} val 选中的列
     */
    const handleSelectionChange = (val) => {
      content.emit('selection-change', val);
    };
    /**
     * @param {Array} row 选中列
     * @param {Boolean} selected 是否被选中
     * @description: 复现框单个选项勾选及取消事件
     */
    const handleAllChange = (row, selected: boolean) => {
      content.emit('select-all', row, selected);
    };
    /**
     * @param {Object} row 选中列
     * @param {Boolean} selected 是否被选中
     * @description: 复选框全选按钮勾选及取消事件
     */
    const handleRowChange = (row, selected: boolean) => {
      content.emit('row-change', row, selected);
    };
    /**
     * @description: 重新布局 Table
     */
    const doLayout = () => {
      // leaseTable.value?.doLayout();
    };
    return {
      tableHeader,
      handleRowChange,
      handleAllChange,
      handleSelectionChange,
    };
  },
});
</script>
