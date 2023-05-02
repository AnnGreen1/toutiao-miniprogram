Page({
  data: {
    html:"<h5>内容加载中...</h5>"
  },
  onLoad() {
    wx.getStorage(
      {
        key: "news",
        success:(res)=>
        {
          console.log(res.data);
          let title = `<h1 class="news-title" style="margin-bottom: 15px;">${res.data.title}</h1>`
          let msg = `<p class="news-info" style="color:gray; font-size:15px; margin-bottom: 5px;">
                        <span class="news-time" style="margin-right: 30px;">${res.data.time}</span>
                        <span class="news-source">${res.data.src}</span>
                    </p>`
          this.setData(
            {
              html:title + msg +res.data.content
            }
          )
        }
      }
    )
  }
})
