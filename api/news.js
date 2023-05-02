import request from "../utils/request.js";

let BASE_URL = 'https://api.jisuapi.com'

// 获取新闻
const news = data => {
  data = data || {};
  console.log(data)
  return request({
    url: `${BASE_URL}/news/get?appkey=${data.appkey}&channel=${data.channel}&start=${data.start}&num=${data.num}`,
    method: "post",
    data
  })
}

// 获取新闻频道
const channel = data => {
  data = data || {};
  console.log(data)
  return request({
    url: `${BASE_URL}/news/channel?appkey=${data.appkey}`,
    method:"get",
  })
}
module.exports = {
  news,
  channel
}