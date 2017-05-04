var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('ejs/welcome.ejs');
})

app.get('/login', function(req, res){
	res.render('ejs/login.ejs');
})

app.post('/login', function(req, res){
	res.send(req.body.email + req.body.password);
})

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port

	console.log("App listening at http://%s:%s", host, port);
})
