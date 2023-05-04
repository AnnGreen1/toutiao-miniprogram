// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    defaultavatar:'../../assets/default_avatar.png',
    num:0,
    userInfo: {},
  },
  onShow() {
    wx.getStorage(
      {
        key:"num",
        success:(pnum)=>{
          console.log(pnum)
          this.setData({
           num:pnum.data
          })
        }
      }
      )
   },
  getUserInfo(e) {
    wx.getUserProfile({
      desc: 'desc',
      success: (result) => {
        console.log(result.userInfo)
        this.setData({
          userInfo: result.userInfo,
          isLogin: true
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  }
})
