// Contact.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

/* setup Contact Schema model*/

const contactSchema = new Schema({
    id_client : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
    },
    sujet : {
        type:String,
        default:'',
    },
    message : {
        type : String,
        default : '',
    }
},{timestamps:true});
// Export Contact model
const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;