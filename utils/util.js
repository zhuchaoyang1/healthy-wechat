const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// About Router API
const redirect = url => {
  wx.redirectTo({url})
};
const switchTab = url => {
  wx.switchTab({url})
}
const reLaunch = url => {
  wx.reLaunch({url})
}
const navigateTo = (url, event) => {
  wx.navigateTo({url,event})
}
const navigateBack = delta => {
  return delta < 1 ? null :
    wx.navigateBack({delta})
}


//Loading
const showLoading = title=>{
  wx.showLoading({title})
}




module.exports = {
  formatTime: formatTime,
  go: {
    redirect,
    switchTab,
    reLaunch,
    navigateTo,
    navigateBack
  },
  loading: {
    showLoading
  }
}