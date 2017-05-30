//example 1

// var http = require('http');

// http.createServer
//     (function (req, res) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('Hello World!');
//     }).listen(8080);


//example 2
var http = require('http');

http.createServer
    (function (req, res) {
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write(req.url+'yxyxyxyx');
    	res.end();
    }).listen(8080);
