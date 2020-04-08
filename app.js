//app.js
App({
  onLaunch: function() {
    console.log('>>> Wechat onlaunch');
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    });
  },
  globalData: {
    userInfo: null,
    token: null
  }
})