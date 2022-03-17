import axios from "axios";
import store from "@/store/index";

import router from "@/router";
const instance = axios.create({
  baseURL: "", //baseURL会在发送请求的时候拼接在url参数的前面
  timeout: 5000,
});
const isLogin = store.state.user.LoginStatus;
//请求拦截
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // 这里其实并不能做些什么,目前看只能设置一下头部信息，靠这个来判断登录还是不行的
    if (!isLogin) {
      console.log("还没有登录");
      router.push("/login");
      alert("请先登录");
    }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
//此处可以根据服务器的返回状态码做响应的处理
//404 404 500
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export function get(url, params) {
  if (params) {
    return instance.get(url, {
      params,
    });
  } else {
    return instance.get(url);
  }
}

export function post(url, data) {
  return instance.post(url, data);
}

export function del(url, params) {
  return instance.delete(url, {
    params,
  });
}
