const util = require('./util.js');
const app = getApp();
// 请求封装
function sendHttp(method, url, data, header = {
  "Content-Type": "application/json",
  "Token": app.globalData.token
}) {
  // util.loading.showLoading('加载中');
  return new Promise((resolve, reject) => {
    wx.request({
      // url: `http://localhost:1031/v1/api${url}`,  网关请求路径
      url: `http://localhost:8080${url}`,
      method: method,
      data: data,
      header: header,
      success: res => {
        if (res.data.code === 1) {
          // 正常业务
          resolve(res);
        } else {
          // 业务异常 可添加弹框显示
          util.toast.showToast(res.data.result, 'none');
          reject();
          return;
        }
      },
      fail: err => {
        console.log(err);
        wx.showToast({
          title: '网络开小差了',
          icon: 'loading',
          duration: 2000
        })
        reject(err);
      },
      complete: res => {
        // wx.hideLoading();
      }
    });
  });
}

module.exports = {
  sendHttp
}