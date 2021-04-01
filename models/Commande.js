const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commandeSchema = new Schema({
    id_client : {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    id_produit : {
        type:mongoose.Schema.Types.ObjectId,
        required:true, 
    },
    quantité : {
        type:Number,
        default:1,
    },
    prixTotal : {
        type:Number,
        default:0,
    },
    etatCommande : {
        type:String,
        default:'En cours',
        enum : ['En cours','Accepté','Refusé','Prête','Livré'],
    }
},{timestamps:true});

const Commande = mongoose.model('Commande',commandeSchema);
module.exports = Commande;