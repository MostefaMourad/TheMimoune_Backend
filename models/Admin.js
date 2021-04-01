const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

var Admin = new Schema({
    email : {
        type:String,
        unique : [true,'Email must be unique'],
    },
    role : {
        type:String,
        default:'',
    },
},{timestamps:true});

var options = { usernameField : 'email'} ; // Specify that the username field will be replaced by email when authenticating

Admin.plugin(passportLocalMongoose,options);

module.exports = mongoose.model('Admin',Admin);