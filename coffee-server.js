http = require('http')
fs = require('fs')
path = require('path')
cal = require('./calendar.coffee')
server = http.createServer()
port = process.env.PORT or 3000

send = (p, res) ->
  x = path.join(__dirname, p)
  fs.createReadStream(x).pipe res
  return

server.on('request', (req, res) ->
  # index.html
  if req.method == 'GET' and req.url == '/'
    send 'index.html', res
    # img
  else if /img/.test(req.url)
    send req.url, res
    # post
  else if req.method == 'POST'
    console.log 'POST!'
    cal.create()
    res.end 'Event created'
  return
).listen port, ->
  console.log 'Server running..'
  return
