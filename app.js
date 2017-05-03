var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('ejs/welcome.ejs');
})

app.get('/login', function(req, res){
	res.render('ejs/login.ejs');
})

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port

	console.log("App listening at http://%s:%s", host, port);
})
