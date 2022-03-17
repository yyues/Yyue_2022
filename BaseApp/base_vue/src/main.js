/*
 * @Author: your name
 * @Date: 2021-07-29 09:21:49
 * @LastEditTime: 2021-07-29 16:39:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \base_vue\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SvgIcon from "@/components/SvgIcon/index";

import { setupAntd } from "@/antd/index";

const app = createApp(App);

//svg
app.component(SvgIcon);
const req = require.context("./assets/svg", false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);

//注册antd
setupAntd(app);
app.config.globalProperties.$router = router;
app
  .use(store)
  .use(router)
  .mount("#app");
