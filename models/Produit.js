const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    name : {
        type:String,
        default:'',
    },
    description : {
        type:String,
        default:'',
    },
    new : {
        type:String,
        default:false,
    },
    type : {
        type:String,
        default:'',
        enum : ['' , 'Frais' , 'Produit Alimentaire'],
    },
    image : {
        type:String,
        default:'',
    },
    prix : {
        type:Number,
        default:0,
    }
},{timestamps:false});

const Produit = mongoose.model('Produit',produitSchema);

module.exports = Produit ;