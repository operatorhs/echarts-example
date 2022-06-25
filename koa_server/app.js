// 服务器的入口文件
// 1. 创建KOA 的实例对象
const Koa = require('koa')
const app = new Koa()
// 2. 绑定中间件
const responseMiddlewareDuration = require('./middleware/koa_response_duration')
app.use(responseMiddlewareDuration)
// 绑定第二层中间件
const reqpHeaderMiddleware = require('./middleware/koa_response_header')
app.use(reqpHeaderMiddleware)
// 第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
// 3. 绑定端口号
app.listen(8888)
