'use strict';

const express = require('express');
const router = require('router');
const bodyParser = require('bodyParser');
const User = require('../models/user');

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const secret = 'omgwtfbbq'


//routes below:

router.route('./login')
  .post( (req,res) => {
    let userParams = req.body;
    console.log('hit login route');

    User.findOne({email: userParams.email}, (err,user) => {
      if (err) throw err;

      user.authenticate(userParams.password, (error, isMatch) => {
        if(error) throw error;

        if (isMatch) {
          let returnObj = {userObj: user, token: jwt.sign(user, secret)}
          return res.status(200).json(returnObj.userObj);)
        }
        else {
          return res.status(401).send({message: 'unauthorized access'});
        }
      });
    });
  });

router.route('/new')
//route to create a new user
  .post( (req,res) => {
    let newUser = new User(newUserParams);

    newUser.save( (error) => {
      if (error) res.status(400).send({message: error.errmsg});

      else res.status(200).json(newUser);
    });
  })
