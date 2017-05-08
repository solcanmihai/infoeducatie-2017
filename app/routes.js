var express = require('express');
var path = require('path');
var User = require('../models/user');
var passport = require('passport');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res){
	res.render("pages/welcome.ejs");
})

router.get('/games/color-game', function(req, res){
	res.render("pages/games/color-game.ejs");
})

router.get('/register', function(req, res){
	res.render("pages/register.ejs");
})

router.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
})

router.post('/register', function(req, res){
	req.body.username
	req.body.password

	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render('register');
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/");
		})
	});

})

router.get('/login', function(req, res){
	res.render("pages/login.ejs");
})

router.post('/login', passport.authenticate("local", {
	successRedirect: "/dashboard",
	failureRedirect: "/login"
}), function(req, res){

});

router.get('/dashboard', isLoggedIn, function(req, res){
	res.render("pages/dashboard.ejs");
})

//About route
router.get('/about', function(req, res){
	res.send("I'm the about page");
})

//Contact route
router.get('/contact', function(req, res){
	res.send("I'm the contact page");
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}
