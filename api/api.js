import request from "../utils/request.js";

let BASE_URL = 'https://api.uomg.com'
// 随机土味情话
const randqinghua = data => {
  data = data || {};
  return request({
    url: `${BASE_URL}/api/rand.qinghua`,
    method: "post",
    data
  })
}

module.exports = {
  randqinghua
}