var mongoose = require('mongoose');
var assert = require('assert');
// mongoose.connect('mongodb://guesto:guesto@ds019950.mlab.com:19950/gesto');
var Schema = mongoose.Schema;
var orderSchema = new Schema({
	"name":String,
    "item":String,
    "foodclass":String,
    "price":Number,
    "spicelevel":String,
    "availability":String
});
var food = mongoose.model('food', foodSchema);