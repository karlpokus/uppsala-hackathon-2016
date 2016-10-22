var http = require('http'),
    fs = require('fs'),
    path = require('path'),
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
    }
  }).listen(port, function(){
    console.log('Server running..');
  });
