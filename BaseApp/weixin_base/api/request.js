// const Toast = require('path/to/@vant/weapp/dist/toast/toast')
// import Toast from '@vant/weapp/toast/toast';
const baseUrl = 'http://10.9.80.226:3000'
const cookie = wx.getStorageSync('cookie') || ''

// 判断是否是完整 url
const isUrl = url => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-\(\)]*[\w@?^=%&/~+#-\(\)])?$/.test(url)
const header = {
  'content-type': 'application/json' // 默认值
}
class Request {
  baseApi(url, data, option, method) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: isUrl(url) ? url : baseUrl + url,
        method,
        data: cookie ? {
          cookie,
          ...data
        } : data,
        header,
        ...option,
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
  get(url, data, option) {
    return this.baseApi(url, data, option, 'GET')
  }
  post(url, data, option) {
    return this.baseApi(url, data, option, 'POST')
  }
}
export default new Request()