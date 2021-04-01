const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliNotificationSchema = new Schema({
    id_client : {
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'Client_Id attribute is required'],
        ref:'Client',
    },
    type : {
        type:String,
        required:true,
        enum : ['Annulé','Accepté','Prête','Terminé'],
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