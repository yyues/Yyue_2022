<!--
 * @Author: your name
 * @Date: 2021-07-29 10:53:30
 * @LastEditTime: 2021-07-30 10:39:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \base_vue\src\components\Home\NavBar\index.vue
-->
<template>
  <over-lay height="200px" :url="img" class="over-lay-whole">
    <div
      class="content"
      :class="isScroll ? 'scroll-navbar' : 'no-scroll-navbar'"
    >
      <div class="logo"></div>
      <ul>
        <li
          v-for="item in NavBarList"
          :key="item.id"
          @click="handleNavBarRouter(item.url)"
        >
          {{ item.title }}
        </li>
      </ul>
      <div class="user"></div>
    </div>
  </over-lay>
</template>
<script>
import { ref, getCurrentInstance } from "vue";
import { reactive } from "@vue/reactivity";
import OverLay from "@/components/Home/OverLay";
import { onMounted } from "@vue/runtime-core";
export default {
  components: { OverLay },
  setup() {
    let img =
      "https://img0.baidu.com/it/u=1020757406,2710278676&fm=26&fmt=auto&gp=0.jpg";
    let NavBarList = reactive([
      {
        id: 1,
        title: "分类",
        url: "/category",
      },
      {
        id: 2,
        title: "热门",
        url: "/hot",
      },
      {
        id: 3,
        title: "排行",
        url: "/ranking",
      },
      {
        id: 4,
        title: "动态",
        url: "/hot",
      },
      {
        id: 5,
        title: "创作中心",
        url: "/create",
      },
    ]);
    let isScroll = ref(false);
    const { ctx } = getCurrentInstance();
    const handleNavBarRouter = url => {
      ctx.$router.push(url);
    };
    const handleScroll = () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      isScroll.value = scrollTop > 50 ? true : false; // 如果滚动到顶部了，isScroll就为true
    };
    onMounted(() => {
      window.addEventListener("scroll", () => {
        handleScroll();
      });
    });
    return {
      NavBarList,
      handleNavBarRouter,
      img,
      isScroll,
    };
  },
};
</script>
<style lang="less" scoped>
.content {
  position: relative;
  z-index: 20;
  width: 100%;
  display: flex;
  height: 64px;
  padding: 5px;
  justify-content: space-evenly;
  min-width: 720px;
  ul {
    display: flex;
    list-style: none;
    height: 100%;
    li {
      display: block;
      line-height: 50px;
      width: 100px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        color: #29ca8e;
      }
    }
  }
  .logo {
    width: 160px;
    padding: 5px;
    background-color: #fff;
  }
  .user {
    justify-self: center;
    width: 100px;
    padding: 5px;
    background-color: #fff;
  }
}
.scroll-navbar {
  color: black;
  position: fixed;
  top: 0;
  background-color: #eee;
  .user,
  .logo {
    background-color: red;
  }
}
.no-scroll-navbar {
  color: white;
}
</style>
