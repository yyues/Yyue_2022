<template>
  <el-descriptions v-bind="$attrs" :size="size" v-if="Object.keys(Data).length !== 0 && typeof Data == 'object'">
    <template #extra v-if="$slots.extra">
      <slot name="extra"></slot>
    </template>
    <template #title v-if="$slots.title">
      <slot name="title"></slot>
    </template>
    <slot
      v-for="{ name, key, prop, label, hidden, width, align, slot, cellClasses, labelClasses } in Header"
      :key="key || prop"
      :name="slot || name || key"
      :data="{ name, key, prop, label, hidden, width, align }"
    >
      <el-descriptions-item
        v-if="!hidden"
        :label="label"
        :key="key ?? prop"
        :prop="prop"
        :width="width"
        :min-width="width && labelWidth"
        :align="align"
        :label-class-name="labelClasses"
        :class-name="cellClasses"
        >{{ Data[prop] ?? '' }}</el-descriptions-item
      >
    </slot>
  </el-descriptions>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, ref, PropType } from 'vue';
interface iOption {
  key: string;
  prop: string;
  label: string;
  width?: string;
  hidden?: string;
  align?: string;
  name?: string;
  slot?: boolean;
  labelClasses?: string;
  cellClasses?: string;
}
export default defineComponent({
  inheritAttrs: false,
  props: {
    // 描述 label 的 宽度，同一固定样式
    labelWidth: {
      type: [String, Number],
      default: '100px',
    },
    // 需要渲染的数据
    data: {
      type: Object,
      required: true,
      default: () => {
        return {};
      },
    },
    // 决定渲染那些数据
    header: {
      type: Array as PropType<iOption[]>,
      required: true,
    },
    size: {
      type: String as PropType<'small' | 'large' | 'default'>,
      default: 'default',
    },
  },
  setup(props, ctx) {
    const { header, data } = toRefs(props);
    const Header = reactive(header.value as iOption[]);
    const Data = reactive(data.value as any);
    return {
      Header,
      Data,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-descriptions {
  padding: 16px;

  :deep(.el-descriptions__body) {
    padding: 10px 0;
    background-color: transparent;
  }
}
</style>
