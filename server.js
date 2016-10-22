var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    html = path.join(__dirname, 'index.html'),
    server = http.createServer(),
    port = process.env.PORT || 3000;

server
  .on('request', function(req, res){
    if (req.method === 'GET' && req.url === '/') {
      fs.createReadStream(html)
        .pipe(res)
    }

  }).listen(port, function(){
    console.log('Server running..');
  });
