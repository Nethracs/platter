// var express = require('express');
// var router = express.Router();
var food_controller = require('../controller/food.js');


module.exports = function(app, passport) {
/* GET home page. */
app.get('/', function(req, res) {
	console.log("reached here");
	console.log(req.user);
	if(isLoggedIn && typeof req.user !== 'undefined') {
		res.render('index', { message: req.flash('loginMessage'), current_user: req.user.local });
	} else {
		res.render('index', { message: req.flash('loginMessage') });
	}
});


 /* GET login page */
app.get('/login', function(req, res) {

// render the page and pass in any flash data if it exists
res.render('login.ejs', { message: req.flash('loginMessage') }); 
 });

 /* GET signup page */
 app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
 res.render('signup.ejs', { message: req.flash('signupMessage') });
  });



 /* GET signup page */
 app.get('/api/food', function(req, res) {
 	food_controller.food_listing(req, res); 	
 });


/* GET signup page */
 app.post('/api/food', function(req, res) {
 	food_controller.add_food(req, res);

 	res.render('index.ejs', { message: req.flash('Food Added'), current_user: req.user.local }); 

 });

 /* GET signup page */
 app.del('/api/food/:food_id', function(req, res) {

 	food_controller.delete_food(req, res, req.params.food_id);
 	res.render('index.ejs', { message: req.flash('Food Deleted'), current_user: req.user.local }); 

 });

 app.get('/api/food/:food_id', function(req, res) {
 	food_controller.delete_food(req, res, req.params.food_id);
 	res.redirect('/');
 });



/* POST signup page */
 app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    })
 );


/* POST login page */
    app.post('/login',passport.authenticate('local', { 
        successRedirect: '/',
        failureRedirect: '/',
    failureFlash: true }
    ));






};

// module.exports = router;


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
