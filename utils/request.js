const request = (config) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      timeout: 5000,
      header: {}, //header中可以添加token值等
      success(res) { //监听成功后的操作
        // console.log(res);
        if (res.statusCode === 200) {
          resolve(res.data)
        }
      },
      fail(error) { //返回失败也同样传入reject()方法
        // console.log(error);
        reject(error)
      }
    })
  })
}
export default request;