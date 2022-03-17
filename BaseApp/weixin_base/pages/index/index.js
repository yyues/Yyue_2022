// index.js
// 获取应用实例
// const app = getApp()
import ajax from "../../api/request";
Page({
  data: {
    seachPlaceHolder: '',
    searchValue: '',
    banner: [],
    windowHeight: ''
  },
  onLoad() {
    // 加载完成后做的事情
    ajax.get('/search/default').then(res => {
      this.setData({
        seachPlaceHolder: res.data.showKeyword
      })
    })
    ajax.get('/banner', { type: 1 }).then(res => {
      this.setData({
        banner: res.banners
      })
    })

  },
  seachChange(e) {
    this.setData({
      searchValue: e.detail
    })
  },
  onSearch() {
    console.log(this.data.searchValue)
  }
})
