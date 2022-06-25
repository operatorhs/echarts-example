// 1. 创建koa 对象
const Koa = require('koa')
// 2. 编写响应函数
const app = new Koa()
app.use((ctx, next) => {
  console.log('第一层中间键', ctx.request.url)
  ctx.response.body = 'hello world'
  next()
})

app.use((ctx, next) => {
  console.log('第二层中间键')
  next()
})
app.use((ctx, next) => {
  console.log('第三层中间键')
})
// 3. 绑定端口号
app.listen(3000)
