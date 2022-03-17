// components/userLogin/userLog
import Toast from '@vant/weapp/toast/toast'
import axios from "../../api/request";
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    placeholder: '请先登录，输入手机号',
    chapchaText: '请输入验证码',
    phoneNum: null,
    chapcha: null,
    loginStatus: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      // 校验是否是手机号
      const isPhone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.data.phoneNum)
      if (!isPhone) {
        Toast('请输入正确的手机号')
        this.setData({
          phoneNum: null
        })
        return
      }
      // 发送验证码
      axios.get('/captcha/sent', { phone: this.data.phoneNum }).then(res => {
        this.setData({
          chapchaText: '验证码已发送'
        })
      })
    },
    handleChange(e) {
      this.setData({
        phoneNum: Number(e.detail)
      })
    },
    handleLogin(e) {
      axios.get('/login/cellphone', { phone: this.data.phoneNum, captcha: Number(e.detail) }).then(res => {
        // 存储登录状态
        wx.setStorageSync('cookie', res.cookie)
        wx.setStorageSync('loginStatus', true)
        this.setData({
          loginStatus: true
        })
      })
    }
  },
  // 组件生命周期
  lifetimes: {
    attached: function () {
      try {
        var value = wx.getStorageSync('loginStatus')
        this.setData({
          loginStatus: value
        })
      } catch (e) {
        this.setData({
          loginStatus: false
        })
      }
    }
  }
})
