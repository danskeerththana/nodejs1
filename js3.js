var http = require('http');
var dt = require('./avarage');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The average are currently: " + dt.myaverage(123,321));
    res.end();
}).listen(8000);
