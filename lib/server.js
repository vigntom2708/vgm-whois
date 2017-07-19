const http = require('http')
const requestIp = require('request-ip')
const uaParser = require('ua-parser-js')

exports.server = http.createServer((req, res) => {
  const ua = uaParser(req.headers['user-agent'])

  const data = JSON.stringify({
    ip: requestIp.getClientIp(req),
    lang: req.headers['accept-language'].split(';')[0],
    os: ua.os.name
  })

  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(data),
    'Content-Type': 'application/json'
  })

  res.write(data)
  res.end()
})
