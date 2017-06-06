exports.sum_average = function (num1,num2) {
    return (num1+num2/2);
};

    var http = require('http');
var dt = require('./sum.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("average of the two numbers: " + dt.sum_average(123,321));
    res.end();
}).listen(8080);
