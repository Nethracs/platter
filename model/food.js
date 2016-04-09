var mongoose = require('mongoose');
var assert = require('assert');
mongoose.connect('mongodb://guesto:guesto@ds019950.mlab.com:19950/gesto');
var Schema = mongoose.Schema;
var foodSchema = new Schema({
	name:String,
    foodtype:String,
    foodclass:String,
    price:Number,
    spicelevel:String,
    availability:String,
    description:String
});
var food = mongoose.model('food', foodSchema);
module.exports = food;
// data=[
//   {
//     "name":"Fried Shrimps with Cashews",
//     "foodtype":"platter",
//     "foodclass":"chinese",
//     "price":"10.00",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Chow Mein",
//     "foodtype":"platter",
//     "foodclass":"chinese",
//     "price":"12.00",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Peking Roasted Duck",
//     "foodtype":"breakfast",
//     "foodclass":"chinese",
//     "price":"6.00",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Won Ton Soup",
//     "foodtype":"breakfast",
//     "foodclass":"chinese",
//     "price":"55.00",
//     "spicelevel":"high",
//     "availability":"no",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Dumplings",
//     "foodtype":"snack",
//     "foodclass":"chinese",
//     "price":"8.00",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Spicy Tofu",
//     "foodtype":"platter",
//     "foodclass":"chinese",
//     "price":"10.00",
//     "spicelevel":"low",
//     "availability":"no",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Spicy Tofu",
//     "foodtype":"snack",
//     "foodclass":"chinese",
//     "price":"11.00",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Spring Rolls",
//     "foodtype":"snack",
//     "foodclass":"chinese",
//     "price":"12.00",
//     "spicelevel":"high",
//     "availability":"no",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Kung Pao Chicken",
//     "foodtype":"platter",
//     "foodclass":"chinese",
//     "price":"10.50",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":" Sweet and Sour Pork",
//     "foodtype":"platter",
//     "foodclass":"chinese",
//     "price":"9.50",
//     "spicelevel":"high",
//     "availability":"no",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Alu Gobi",
//     "foodtype":"platter",
//     "foodclass":"indian",
//     "price":"10.00",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Alu Matar",
//     "foodtype":"platter",
//     "foodclass":"indian",
//     "price":"12.00",
//     "spicelevel":"low",
//     "availability":"no",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Barfi",
//     "foodtype":"snack",
//     "foodclass":"indian",
//     "price":"5.50",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Beef Vindaloo",
//     "foodtype":"platter",
//     "foodclass":"indian",
//     "price":"12.30",
//     "spicelevel":"low",
//     "availability":"no",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Carrot Halwa",
//     "foodtype":"snack",
//     "foodclass":"indian",
//     "price":"7.29",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Chana Masala",
//     "foodtype":"platter",
//     "foodclass":"indian",
//     "price":"8.99",
//     "spicelevel":"high",
//     "availability":"no",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Coriander Chutney",
//     "foodtype":"platter",
//     "foodclass":"indian",
//     "price":"9.20",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Lamb Kebabs",
//     "foodtype":"snack",
//     "foodclass":"indian",
//     "price":"8.99",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Onion Pakora",
//     "foodtype":"snack",
//     "foodclass":"indian",
//     "price":"5.30",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Pulao",
//     "foodtype":"platter",
//     "foodclass":"indian",
//     "price":"10.30",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Masala Dosa",
//     "foodtype":"breakfast",
//     "foodclass":"indian",
//     "price":"12.00",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Rava Dosa",
//     "foodtype":"breakfast",
//     "foodclass":"indian",
//     "price":"7.30",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Chilaquiles",
//     "foodtype":"breakfast",
//     "foodclass":"mexican",
//     "price":"10.30",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Tacos al pastor",
//     "foodtype":"breakfast",
//     "foodclass":"mexican",
//     "price":"9.00",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Tostadas",
//     "foodtype":"platter",
//     "foodclass":"mexican",
//     "price":"5.60",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Chiles en nogada",
//     "foodtype":"snack",
//     "foodclass":"mexican",
//     "price":"7.25",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Elote",
//     "foodtype":"snack",
//     "foodclass":"mexican",
//     "price":"12.00",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Enchiladas",
//     "foodtype":"breakfast",
//     "foodclass":"mexican",
//     "price":"10.30",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Mole",
//     "foodtype":"platter",
//     "foodclass":"mexican",
//     "price":"6.54",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Tamales",
//     "foodtype":"platter",
//     "foodclass":"mexican",
//     "price":"7.20",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Pozole",
//     "foodtype":"snack",
//     "foodclass":"mexican",
//     "price":"10.23",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"burrito",
//     "foodtype":"platter",
//     "foodclass":"mexican",
//     "price":"6.49",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Chicken parmigiana",
//     "foodtype":"platter",
//     "foodclass":"italian",
//     "price":"12.00",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Fettuccine alfredo ",
//     "foodtype":"snack",
//     "foodclass":"italian",
//     "price":"13.00",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Lasagna",
//     "foodtype":"platter",
//     "foodclass":"italian",
//     "price":"10.45",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Linguine with clam sauce",
//     "foodtype":"breakfast",
//     "foodclass":"italian",
//     "price":"10.30",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Veal marsala ",
//     "foodtype":"platter",
//     "foodclass":"italian",
//     "price":"17.00",
//     "spicelevel":"mid",
//     "availability":"no",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Chicken Saltimbocca",
//     "foodtype":"platter",
//     "foodclass":"italian",
//     "price":"5.89",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Pasta primavera",
//     "foodtype":"breakfast",
//     "foodclass":"italian",
//     "price":"9.20",
//     "spicelevel":"low",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Shrimp fra diavolo",
//     "foodtype":"platter",
//     "foodclass":"italian",
//     "price":"12.40",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Penne alla vodka",
//     "foodtype":"breakfast",
//     "foodclass":"italian",
//     "price":"10.24",
//     "spicelevel":"high",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   },
//   {
//     "name":"Spaghetti with tomato sauce",
//     "foodtype":"platter",
//     "foodclass":"italian",
//     "price":"11.25",
//     "spicelevel":"mid",
//     "availability":"yes",
//     "description":"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae."
//   }
// ]


// food.collection.insertMany(data, function(err,r) {
//  assert.equal(null, err);
//  assert.equal(3, r.insertedCount); 
//  db.close();
//  });

    

  



