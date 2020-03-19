//app.js
var request = require('/utils/request.js')
App({
  onLaunch: function() {
    console.log('>>> Wechat onlaunch');
    wx.login({
      success: res => {
        request.sendHttp('POST', '/user/login', {
          code: res.code
        }).then(res => {
          console.log(res.data.result.users.length);
        }).catch(err => {
          console.log(err);
        });
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  globalData: {
    userInfo: null
  }
})