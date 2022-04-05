import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { message } from "antd";

const api: AxiosInstance = axios.create({
  //baseURL: "/api/",
  timeout: 5000,
});
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);
api.interceptors.response.use(
  (res: AxiosResponse) => {
    switch (res.status) {
      case 200:
        message.success("请求成功", 300);
        if (res.data) {
          return res.data;
        } else {
          return res;
        }
      default:
        message.error("请求错误，请重试！！！");
    }
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

export default api;
