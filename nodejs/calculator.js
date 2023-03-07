module.exports = {

	sum: function(a, b){
	return 'a + b: ',a + b;
},

 subtract: function (a, b){
		console.log('a - b:',a - b);

},

dispalyAboutpage: () => {
	let html = "<div>";
	html += "<h2>this is about page</h2>";
	html += "<p>fjdslkfjsdlkfjsdklfsdlkfjslkfjs</p>";
	html += "</div>";
	return html;

}
}

// exports.sum = function(a, b){
// 	console.log('a+b: ',a+b);
// }

// exports.subtract = function(a, b){
// 	console.log('a-b: ',a-b);

// }