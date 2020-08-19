const fs = require('fs')

exports.index = (req, res) => {
  if(req.method === 'GET') {
    res.setHeader('X-Foo', 'bar')
    fs.readFile('./index.html', (err, data) => {
      if(err) {
        res.end(err)
        return
      } else {
        res.setHeader('Content-Length', data.length)
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('SSSSSSBBBB')
        res.end(data)
      }
    })
  } else {

  }

}

exports.list = (req, res) => {
  if(req.method === 'GET') {
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('X-Foo', 'bar')
    fs.readFile('./list.html', (err, data) => {
      if(err) {
        res.setHeader('Content-Length', Buffer.byteLength(data));
        res.statusCode = 200
      res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8' });

        res.end(err)
      } else {
        res.setHeader('Content-Length', Buffer.byteLength(data));
        res.statusCode = 200
        res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data)
      }
    })
  } else if(req.method === 'POST') {
    var item = ''
    req.setEncoding('utf-8')
    req.on('data', (chunk) => {
      console.log('chunk', chunk)
      item += chunk
    })
    req.on('end', () => {
      res.end('ok\n')
    })
  }
}