var http = require('http');
var url = require('url');

var UrlPattern = require('url-pattern');

var calculator = require('./calculator');

var homeUrlPattern = new UrlPattern("/home/:id");
var aboutUrlPattern = new UrlPattern("/about");

var fs = require("fs");



http.createServer(function(req, res){

	// let index = fs.readFileSync('index.html');
	let index = fs.readFile('index.html', function(err, data){
		console.log('call back function is called');
			let req_url = req.url


	res.writeHead(200, {'Content-Type': 'text/html',
	 "Authorization": "classweb"});


	if(aboutUrlPattern.match(req_url)){
	res.write(calculator.dispalyAboutpage());

	}else if(homeUrlPattern.match(req_url)){
		res.write(data);
		res.end();

	}

	else {
	res.write('<h1>not found</h1>');
	res.end();

	}


	});

console.log('code execution before callback');
	console.log('server is running');

}).listen(3000);
