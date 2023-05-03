Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "../../assets/default_avatar.png",
      nickName: ""
    },
    isLogin: false,
    num:0
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
  // 获取用户信息
  getUserInfo() {
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
  },
})