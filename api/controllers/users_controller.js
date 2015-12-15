'use strict';

let User = require('../models/user');

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const secret = 'posholnahuisuka'

//GET
function getUser(req,res) {
  console.log('getting a user')

}

function getAll(req,res) {
  console.log('hit get all users route');
  User.find( (error,users) => {
    if (error) response.json({message: 'No users found. error.'});

    res.json(users)
  });
}

function auth(req,res) {
  console.log('Authenticating user HTTP header token');
  return res.status(200).send({message:'Token OK'});
}
//Post
function newUser(req,res) {
  console.log('hit create new user route');

  let user = new User(req.body);

  user.save( (error) => {
    if (error) res.json({message: 'Could not create new user because of:' + error});

    res.json(user);
  });
}

function loginUser(req, res) {
  console.log('hit log in user route');
  let userParams = req.body;
  User.findOne({email: userParams.email}, (err,user) => {
    if (err) {
       throw err;
    }
    else if (!user) {
       res.status(500).json({message: "user not found"})
    }
    else {
    user.authenticate(userParams.password, (error, isMatch) => {
      if (error) throw error;

      if (isMatch) {
        let token = jwt.sign(user, secret, {expiresIn: 1444000});

        res.json({
          success: true,
          message: 'Authorization successful',
          user: user._doc,
          token: token
        });
      }
      else {
        return res.status(401).send({message: 'unauthorized access'})
      }
    });
  }
  });
}

//Put
function updateUser(req, res) {
  console.log('hit update user route!');
}


module.exports = {
  getAll: getAll,
  loginUser: loginUser,
  newUser: newUser,
  auth: auth,
  getUser: getUser,
  updateUser: updateUser
}
