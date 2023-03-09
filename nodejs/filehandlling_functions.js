pattern.match(req.url)
	let myUrl = url.parse(req.url, true);
	let query = myUrl.query

	if(query.something==="this is value"){
		res.write("<h2>got the value</h2>");
		res.end();
	}

var pattern = new UrlPattern('/home/:id');

var UrlPattern = require('url-pattern');



file handling

var fs = require('fs');

var html = "<h1>jflsd</h1>";
fs.appendFile('mynewfile1.txt', html, function (err) {
  if (err) throw err;
  console.log('Saved!');
});



fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});


	let indx2 = fs.readFileSync('index.html');
	console.log(indx2)
	let index = fs.readFile('index.html', function(err, data){
console.log(data);
		return err ? err : data
	});
	console.log(index);

var fs = require('fs');

