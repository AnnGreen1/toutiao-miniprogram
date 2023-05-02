import {
  randqinghua
} from '../../api/api.js'

// requestdemo.js

Page({
  data: {
    content: ''
  },
  onShow() {
    randqinghua().then((res) => {
      console.log(res)
      if (res.code == 1) {
        this.setData({
          content: res.content
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }
})