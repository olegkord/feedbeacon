'use strict'

let express = require('express');
let path = require('path');
let cors = require('cors');
let logger = require('morgan');
let bodyParser = require('body-parser');
let app = express();


//noSQL database:
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/feedbeacon');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connected');
})
//end db



//set up back end routes:
let userRoutes = require('./config/userRoutes');
let restoRoutes = require('./config/restoRoutes');
//end routes

// app.use('/user', user);
app.use(cors());

//set up body parsing and logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//end logging

app.get('/', (req,res) => {
  res.send('server is running!');
})

app.get('/favicon.ico', (req,res) => {
  res.send('here is your dumbass favicon');
})

app.use(userRoutes);
app.use(restoRoutes);
//perhaps add static dependencies here:
//end static dependencies

let server = app.listen(process.env.PORT || 3000, () => {
  console.log('server running');
})

let io = require('socket.io')(server);

//////SERVER SIDE SOCKET EVENTS:
io.on('connection', (client) => {
  console.log('CLIENT CONNECTION!');
  client.on('user request', (data) => {
    io.emit('reservation', {thing: "here is some stuff"});
  })
})
