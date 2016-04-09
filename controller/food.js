// var mongoose = require('mongoose');
// var assert = require('assert');
// mongoose.connect('mongodb://guesto:guesto@ds019950.mlab.com:19950/gesto');


// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var Food = require('../model/food');

// var food=db.foods.distinct( "dept" );

module.exports.food_listing = function(req, res) {
	if(typeof req.query.type !== 'undefined') {
		console.log("we are here");
		console.log(req.query.type);
		Food.find({"foodclass": req.query.type}, function(err, food) {
			if(err) {
				res.send(err);
			}
			if(typeof req.user !== 'undefined') {
				res.render('food_listing.ejs', {food: food, current_user: req.user.local });
			} else {
				res.render('food_listing.ejs', {food: food});
			}
		})
	} else {
		Food.find(function(err, food) {
			if(err) {
				res.send(err);
			}
			if(typeof req.user !== 'undefined') {
				res.render('food_listing.ejs', {food: food, current_user: req.user.local });
			} else {
				res.render('food_listing.ejs', {food: food});
			}
		});
	}
};


module.exports.add_food = function(req, res) {
 // create the user
            var food  = new Food();
            // set the user's local credentials
            food.name    = req.body.name;
            food.foodclass =req.body.foodclass;
           	food.foodtype    = req.body.foodtype;
            food.price   = req.body.price;
            food.spicelevel    = req.body.spicelevel;
            food.availability    = req.body.availability;
            food.description   = req.body.description;

              // save the user
            food.save(function(err) {
                if (err)
                    throw err;
               
            });

}

module.exports.delete_food = function(req, res, id) {

	Food.findByIdAndRemove(id, function(err) {
    if (err) {
        res.send(err);
    }
    
});


}




