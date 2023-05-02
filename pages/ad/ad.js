Page({
  data: {
    countdown: 5,
    timeInterval: 0
  },

  startCountdown() {
    this.data.timeInterval = setInterval(()=>{
      this.setData({
        countdown: this.data.countdown - 1
      })
      if (this.data.countdown == 0) {
        this.toHome();
      }
    }, 1000)
  },

  toHome(){
    clearInterval(this.data.timeInterval)
    wx.navigateTo({
      url: '../news/news',
    })
  },
  onReady: function () {
    this.startCountdown()
  },
})