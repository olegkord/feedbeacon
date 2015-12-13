'use strict'

let express = require('express');
let path = require('path');
let cors = require('cors');
let logger = require('morgan');
let bodyParser = require('body-parser');
let app = express();


//noSQL database:
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/feedbeacon');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connected');
})
//end db



//set up back end routes:
let routes = require('./config/routes');
//end routes

// app.use('/user', user);
app.use(cors());

//set up body parsing and logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//end logging

app.use(routes);
//perhaps add static dependencies here:
//end static dependencies

let server = app.listen(3000, () => {
  console.log('server running');
})
