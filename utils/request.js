const request = (config) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      timeout: 5000,
      header: {}, 
      success(res) { 
        // console.log(res);
        if (res.statusCode === 200) {
          resolve(res.data)
        }
      },
      fail(error) {
        // console.log(error);
        reject(error)
      }
    })
  })
}
export default request;