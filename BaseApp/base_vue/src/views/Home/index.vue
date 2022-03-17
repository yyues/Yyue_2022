<!--
 * @Author: your name
 * @Date: 2021-07-29 09:21:49
 * @LastEditTime: 2021-07-30 10:34:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \base_vue\src\views\Home\index.vue
-->
<template>
  <section id="home">
    <header>
      <nav-bar> </nav-bar>
    </header>
    <div style="height:2000px"></div>
  </section>
</template>
<script>
import NavBar from "@/components/Home/NavBar";
export default {
  components: { NavBar },
  setup() {},
};
</script>
<style lang="less" scoped>
#home {
  width: 100%;
  // background-color: #eee;
  min-height: 100vh;
}
</style>
