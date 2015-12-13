'use strict'

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

//noSQL database:
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/feedbeacon');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connected');
})
//end db


//set up back end routes:
const routes = require('./config/routes');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//end routes

//perhaps add static dependencies here:

//end static dependencies

cons server = app.listen(3000, () => {
  console.log('server running');
})
