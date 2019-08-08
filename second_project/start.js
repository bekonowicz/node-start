var http = require('http');
var fs = require('fs');
var formidable = require('formidable');


http.createServer(function (req, res) {
	if (req.url == '/fileupload') {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			var oldpath = files.filetoupload.path;
			var newpath = 'uploaded_files/' + files.filetoupload.name;
			fs.rename(oldpath, newpath, function(err) {
				if (err) throw err;
				res.write('file uploaded and moved');
				res.end();
			})
			
		});

	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.readFile('templates/upload_form.html', function(err,data) {
			res.write(data);
			res.end();	
		});
	
	}
}).listen(8080);