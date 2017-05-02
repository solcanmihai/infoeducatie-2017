var express = require('express');
var app = express();
var path = require('path');

//Where to find the static ressources(aka html, js, css, images, etc)
path.resolve(__dirname, '.../public');

app.get('/', function(req, res){
	res.sendFile('welcome.html');
})

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port

	console.log("App listening at http://%s:%s", host, port);
})
