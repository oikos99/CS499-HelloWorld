var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.write('<h1>Hello World</h1>');
	response.end();
}).listen(3000);

console.log('Node server is now listening on port 3000');