const app = require('./../lib/server')

const port = process.env.PORT || 5000

function httpError (e, soccket) {
  console.log('Error: ', e.message)
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
}

app.server
  .on('clientErrror', httpError)
  .listen(port)

/* globals socket */
