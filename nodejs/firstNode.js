var http = require('http');
var url = require('url');
var calculator = require('./calculator');


http.createServer(function(req, res){
	
	res.writeHead(200, {'Content-Type': 'text/html',
	 "Authorization": "classweb"});


	if( req.url == "/about"){
	res.write(calculator.dispalyAboutpage());

	}else if(req.url == "/home"){
	res.write('<h1>home page</h1>');

	}else {
	res.write('<h1>not found</h1>');

	}
	console.log('server is running');

	res.end();
}).listen(3000);
