/*
 * @Author: your name
 * @Date: 2021-07-29 09:21:49
 * @LastEditTime: 2021-07-29 17:26:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \base_vue\src\router\index.js
 */
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
const common = [
  {
    path: "/login",
    component: () => import("@/common/Login"),
    meta: {
      title: "登录页面",
    },
  },
  {
    path: "/PageNoFound",
    component: () => import("@/common/404"),
    meta: {
      title: "PageNoFound",
    },
  },
];

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "YYue",
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "about",
    },
    component: () => import("@/views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
//添加普通路由

//添加不同权限路由
common.forEach(item => {
  router.addRoute(item);
});

router.beforeEach((to, form, next) => {
  if (to.meta.title) {
    //设置页面标题
    document.title = to.meta.title;
  } else {
    //  do something
  }
  // if (to.matched.length == 0) {
  //   next("/PageNoFound");
  // }
  const token = sessionStorage.getItem("userToken");
  if (to.path !== "/login" && token) {
    // next({path:'/login'})
  } else {
    next();
  }
  if (form) {
    //  do something
  }
});

export default router;
