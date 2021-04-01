const express = require('express');
const mongoose = require('mongoose');
const config = require('../config');
const passport = require('passport');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');



/** Routers */


const app = express();


/***** Integration du MongoDB (en utilisant un cluster) */

mongoose.connect(config.mongoUrl,
  { useNewUrlParser: true,
    useUnifiedTopology: true ,
    useFindAndModify: false })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/** Setting UP the envirement for express & passport */
app.use(cors());
app.use(logger('dev'));
//app.use('/admin',dashboardRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use('/files',express.static(path.join(__dirname,'storage/Files')));



/** Configure Express and Sessions */
/*app.use(session({
  secret:'secret Key',
  resave:false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());*/



/** Integrating the Routes */


/** Gestion des erreurs */
app.use(function(err,req,res,next) {
  res.status(res.statusCode || 500);
  res.json({error:err.message});
});

module.exports = app;