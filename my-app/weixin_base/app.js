// app.js
App({
  onLaunch() {
    // 小程序加载完成后执行
    const cookie = wx.getStorageSync('cookie')
    if (!cookie) {
      wx.setStorageSync('loginStatus', false)
    }
  },
  globalData: {
    userInfo: null
  }
})
