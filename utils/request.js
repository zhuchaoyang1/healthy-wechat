// 请求封装
function sendHttp(method, url, data, header = {
  "Content-Type": "application/json"
}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `http://localhost:8080/${url}`,
      method: method,
      data: data,
      header: header,
      success: res => {
        if (res.data.code === 1) {
          // 正常业务
          resolve(res);
        } else {
          // 业务异常 可添加弹框显示
          resolve(res);
        }
      },
      fail: err=> {
        wx.showToast({
          title: '网络开小差了',
          icon: 'loading',
          duration: 2000
        })
        reject(err);
      }
    });
  });
}

module.exports = {
  sendHttp
}