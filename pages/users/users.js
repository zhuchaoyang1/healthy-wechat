const app = getApp();
const request = require('../../utils/request.js');
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: null,
    userInfo: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    btn_disable: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    util.loading.showLoading('加载中');
    this.login();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  login() {
    util.loading.showLoading('加载中');
    wx.login({
      success: res => {
        request.sendHttp('POST', '/user/login', {
          code: res.code
        }).then(res => {
          let result = res.data.result;
          if (!result.users) {
            // 需要注册操作
            this.setData({
              btn_disable: false
            })
            // 保存TOKEN
            app.globalData.token = result.jwt;
          } else {
            app.globalData.userInfo = users;
            util.go.redirect('/pages/index/index', null);
          }
        }).catch(err => {
          console.log(err);
        });
      },
      fail: function(res) {},
      complete: function(res) {
        wx.hideLoading();
      }
    })
  },

  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo
    })
    this.register();
  },

  register(openid = this.data.openid) {
    util.loading.showLoading('加载中');
    let userInfo = this.data.userInfo;
    request.sendHttp('POST', '/user/reg', {
      ...userInfo
    }).then(res => {
      if (res.data.code === 1) {
        this.setData({
          btn_disable: true
        });
        app.globalData.userInfo = res.data.result;
        util.go.redirect('/pages/index/index', null);
      }
    }).catch(err => {
      console.log(err);
    });
    wx.hideLoading();
  },


})