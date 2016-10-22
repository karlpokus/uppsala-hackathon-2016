var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    cal = require('./calendar.coffee'),
    server = http.createServer(),
    port = process.env.PORT || 3000,
    send = function(p, res){
      var x = path.join(__dirname, p);
      fs.createReadStream(x)
        .pipe(res);
    };

server
  .on('request', function(req, res){

    // index.html
    if (req.method === 'GET' && req.url === '/') {
      send('index.html', res);

      // img
    } else if (/img/.test(req.url)) {
      send(req.url, res);

      // post
    } else if (req.method === 'POST') {
      console.log('POST!');
      cal.create();
      res.end('Event created');
    }
  }).listen(port, function(){
    console.log('Server running..');
  });
