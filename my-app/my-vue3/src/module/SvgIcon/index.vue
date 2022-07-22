<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" fill="currentColor" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  }
})
</script>
<style scoped>
.svg-icon {
  /* display: inline-block; */
  width: 1.2em;
  height: 1.2em;
  margin-right: 5px;
  fill: currentColor;
  overflow: hidden;
}
</style>
