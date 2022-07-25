// 导出 axios 请求
import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'

import router from '/@/router/router'

const request = axios.create({
  baseURL: '',
  timeout: 1000 * 3,
  headers: {}
})
const token = false

interface CustomAxiosConfig extends AxiosRequestConfig {
  TokenVerify?: boolean
}
// 请求拦截器
request.interceptors.request.use(async (config: CustomAxiosConfig) => {
  const headers = config.headers as AxiosRequestHeaders
  if (config.TokenVerify) {
    // 开启token 校验
    router.push('/')
    return
  }
  // token校验
  if (token) headers['token'] = token

  return config
})

// 响应 请求拦截器
request.interceptors.response.use(async (response: AxiosResponse) => {
  // 有返回的响应结果
  console.log(response)
  // 业务处理 start

  // 业务处理 start
  return response.data
})
// 错误统一处理
const handleErr = (err: any) => {
  console.log(err)
}

export default {
  get(url: string, config: AxiosRequestConfig<any>): Promise<any> {
    return request.get(url, config).catch((err: unknown) => handleErr(err))
  },
  post(url: string, config: AxiosRequestConfig<any>): Promise<any> {
    return request.post(url, config).catch((err: unknown) => handleErr(err))
  },
  delete(url: string, config: AxiosRequestConfig<any>): Promise<any> {
    return request.delete(url, config).catch((err: unknown) => handleErr(err))
  },
}
