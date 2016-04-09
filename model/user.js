var mongoose = require('mongoose');
var assert = require('assert');
var bcrypt   = require('bcrypt-nodejs');

// mongoose.connect('mongodb://guesto:guesto@ds019950.mlab.com:19950/gesto');
var Schema = mongoose.Schema;
var userSchema = new Schema({

    local            : {
	username:String,
	name:String,
	address:String,
	phone:Number,
    email:String,
    password:String
}
});


userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports =mongoose.model('User', userSchema);

// var user = mongoose.model('user', userSchema);
