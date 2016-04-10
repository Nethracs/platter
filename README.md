# platter

#PLATTER: 

Master Chef Emeril has planned to participate in food festival at Pioneers Square this weekend,So I have designed a web application for him to improve his business.

#API Design
The challenge of this task is that i have less than two days of time and i was promised only a lesser share of profit from the event.
I have designed the application with features to list all the available foods with details about each of the food item. Chef Emeril has four class of food items - Indian, Chinese, Mexican and Italian. So these four are given as base cuisines to choose from.A user can sign up and then login to add items to cart.There is another browse option to list all the available food options.As requested by Chef Emeril there are three major api end points:


#Request Type	                URL                     Description                                     UI Option
GET	                        /api/food	        Get all of the food items in the order          Browse
POST	                        /api/food	        Create a single food item                       Add
DELETE	                        /api/food/:food_id	Delete a single food item                       Delete Food

These are also given a UI by which the same requests can be viewed on a browser. Only the logged in users will be able to view the options of Cart. Only logged in users can add or delete food items through the User Interface. Express.JS has been used to create the application with jQuery as the client side JS framework. MongoDB from MLabs has been used as the database. There are 2 Schemas created:

# UserSchema
{
        local: {
	        username:String,
	        name:String,
	        address:String,
	        phone:Number,
                email:String,
                password:String
        }
}

# FoodSchema
{
        name:String,
        foodtype:String,
        foodclass:String,
        price:Number,
        spicelevel:String,
        availability:String,
        description:String
}

Since this website's primary use is for attracting customers and has a high marketing value, we have given it a simple and pleasing UI. This application has been hosted in Heroku. The link to view it online is as below:

https://boiling-dawn-52054.herokuapp.com/
