var express = require('express');
var app =	express();
var morgan = require('morgan');
var passport = require('passport');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var User = require("./models/user");

mongoose.connect("mongodb://localhost/infoeducatie-2017");

var port = 3000;

app.use(require("express-session")({
	secret: "Muie saguna muie saguna muie saguna muie saguna",
	resave: false,
	saveUninitialize: false
}))

//configure
app.use(express.static(__dirname + '/app/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Routes
app.use(require('./app/routes'));

//Start the server
app.listen(port, function(){
	console.log("Server started on http://localhost:" + port);
});

