import {
  news,
  channel
} from '../../api/news.js'

// requestdemo.js

Page({
  data: {
    appkey:"eb59e0c742b44907",
    // appkey:"32ba3acb4a601a62",
    channel: {},
    newsList:[],
    current_item:"头条",
    start:0,
    num:10
  },
  onShow() {
   this.channelfun();
   this.newsfun();
  },
  newsfun(type){
    let data = {
      'appkey':this.data.appkey,
      'channel':this.data.current_item,
      'num':10,
      'start':this.data.start
    };
    news(data).then((res) => {
      console.log(res)
      if (res.status == 0) {
        this.setData(
          {
            newsList: [...this.data.newsList, ...res.result.list]
          }
        )
      }
    }).catch((error) => {
      console.log(error);
    })
  },
  channelfun(){
    channel({'appkey':this.data.appkey}).then((res) => {
      console.log(res)
      if (res.status == 0) {
        this.setData({
          channel: res.result
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  },
  onReachBottom: function () {
    console.log("刷新了");
    //更新start，数据的起始位置
    this.setData(
      {
        //每次触发上拉时，在start原来的基础上加上 num
        start: this.data.start + this.data.num
      }
    )
    this.newsfun();
    console.log(this.data.newsList);
  },
  selectNav: function(e)
  {
    console.log(e.target.dataset.selected);
    this.setData({
      current_item: e.target.dataset.selected
    })
    this.setData({
      newsList:''
    })
    this.newsfun();
  },
  readNews(e){
    wx.setStorage(
      {
        key:"news",
        data: e.target.dataset.news
      }
    )
    wx.getStorage(
      {
        key:"num",
        success:(num)=>{
          console.log(num)
          wx.setStorage(
            {
              key:"num",
              data: num.data+1
            }
          )
        }
      }
      )
    wx.navigateTo({
      url: '../detial/detial',
    })
  }
})