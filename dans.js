var http = require('http');
var dt = require('./avaerage');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': '.head.html'});
    res.write("The date and time is currently: " + dt.myaverage());
    res.end();
}).listen(8080);
