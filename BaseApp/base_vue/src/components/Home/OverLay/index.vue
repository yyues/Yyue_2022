<!--
 * @Author: your name
 * @Date: 2021-07-29 14:42:56
 * @LastEditTime: 2021-07-29 17:04:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \base_vue\src\components\Home\OverLay\index.vue
-->
<template>
  <div
    class="overlay"
    :style="{ 'background-image': `url(${url})`, height: height }"
  >
    <div class="wrapper" :style="{ height: height }"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: "180px",
    },
    url: {
      require: true,
      type: String,
    },
  },
  setup() {},
};
</script>
<style lang="less">
.overlay {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 12;
  .wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    opacity: 0.55;
    background: linear-gradient(to right, #292e49, #536976);
    width: 100%;
    z-index: 12;
  }
}
</style>
