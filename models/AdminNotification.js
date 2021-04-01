const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliNotificationSchema = new Schema({
    type : {
        type:String,
        required:true,
        enum : ['Commande Reçu','Commentaire Reçu'],
    },
    message : {
        type:String,
        required:true,
    },
    id_cible : {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref : 'Commande',
    },
});

let cliNotifications = mongoose.model('CliNotification',cliNotificationSchema);

module.exports = cliNotifications ;