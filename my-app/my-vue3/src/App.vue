<template>
  <router-view v-slot="{ Component, route }">
    <!-- 使用任何自定义过渡和回退到 `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style>
.fade-active-in,
.fade-active-out {
  transition: all 0.28s;
}
</style>
