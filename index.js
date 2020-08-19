
//实现一个http服务器
const http = require('http')
const router = require('./router')
const server = http.createServer((req, res) => {
  console.log(req.method)
  console.log(req.url)
  // console.log(req.headers)
  // console.log(req)
  switch(req.url) {
    case '/':
      router.index(req, res)
      break
    case '/list':
      router.list(req, res)
      break
    default:
      router.index(req, res)
      break
  }
})



server.listen(8000, () => {
  console.log('server start at 8000')
})