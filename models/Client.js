const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

var Client = new Schema({
    email : {
        type:String,
        unique : [true,'Email must be unique'],
    },
    completeName : {
        type:String,
        required: [true,'Complete name attribute is required']
    },
    profileImage : {
        type:String,
        default:'',
    },
});

var options = { usernameField : 'email'} ; // Specify that the username field will be replaced by email when authenticating

Client.plugin(passportLocalMongoose,options);

module.exports = mongoose.model('Client',Client);
