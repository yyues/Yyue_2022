// pages/video/video.js
import axios from "../../api/request";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoList: [],
    offset: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.GetVideoList()
  },
  GetVideoList() {
    const offset = this.data.offset
    axios.get('/video/timeline/all', { offset }).then(res => {
      this.setData({
        videoList: res.datas
      })
    })
  },
  handleClick(e) {
    const id = e.currentTarget.dataset['id']
    wx.navigateTo({
      url: `../videoDetail/videoDetail?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})