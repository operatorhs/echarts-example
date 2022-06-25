// 处理业务逻辑的中间键， 读取json某个文件的
// 同源策略 同协议\同域名\同端口
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx, next) => {
  const url = ctx.request.url
  let filePath = url.replace('/api', '')
  filePath = '../data' + filePath + '.json'
  filePath = path.join(__dirname, filePath)
  try {
    const ret = await fileUtils.getFileJsonData(filePath)
    ctx.response.body = ret
  } catch (error) {
    const errorMsg = {
      message: '读取文件读取内容失败， 文件资源不存在',
      status: 404
    }
    ctx.response.body = JSON.stringify(errorMsg)
  }
  await next()
}
