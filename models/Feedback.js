const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    id_client : {
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'Client_Id attribute is required'],
        ref:'Client',
    },
    services : {
        type:Number,
        min:1,
        max:5,
        required:true,
    },
    rating : {
        type:Number,
        min:1,
        max:5,
        default:1,
    },
},{timestamps:true});

let Feedbacks = mongoose.model('Feedback',feedbackSchema);

module.exports = Feedbacks;