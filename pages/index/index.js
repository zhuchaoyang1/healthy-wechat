//index.js
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: null
  },
  onLoad: function() {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
})