'use strict';

let User = require('../models/user');

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const secret = 'omgwtfbbq'

//GET
function getAll(req,res) {
  console.log('hit get all users route');
  User.find( (error,users) => {
    if (error) response.json({message: 'No users found. error.'});

    res.json(users)
  });
}

//Post
function newUser(req,res) {
  console.log('hit create new user route');

  let user = new User(req.body);

  user.save( (error) => {
    debugger;
    if (error) res.json({message: 'Could not create new user because of:' + error});

    res.json(user);
  });
}

module.exports = {
  getAll: getAll,
  newUser: newUser
}
