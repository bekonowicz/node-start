var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case')

//create a server object:
http.createServer(function (req, res) {

	let urlData = url.parse(req.url, true).query;
	queryNumber = urlData.number;


	fs.readFile('templates/' + queryNumber + '.html', function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end('404 Not Found');
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
		
	})

}).listen(8080);