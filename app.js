var express = require('express');
var app = express();

//Where to find the static ressources(aka html, js, css, images, etc)
app.use(express.static('public'));

app.get('/', function(req, res){
	res.send('Hello world');
})

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port

	console.log("App listening at http://%s:%s", host, port);
})
