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
//routes below:
// router.route('/')
//   .get( cors(), (req,res) => {
//     res.json({message: 'hit index view'})
//   })

// router.route('/login')
//   .post( (req,res) => {
//     let userParams = req.body;
//     console.log('hit login route');
//
//     User.findOne({email: userParams.email}, (err,user) => {
//       if (err) throw err;
//
//       user.authenticate(userParams.password, (error, isMatch) => {
//         if(error) throw error;
//
//         if (isMatch) {
//           let returnObj = {userObj: user, token: jwt.sign(user, secret)}
//           return res.status(200).json(returnObj.userObj);
//         }
//         else {
//           return res.status(401).send({message: 'unauthorized access'});
//         }
//       });
//     });
//   });
//
// router.route('/new')
// //route to create a new user
//   .post( (req,res) => {
//     console.log('Server creating new user')
//     let newUser = new User(newUserParams);
//
//     newUser.save( (error) => {
//       if (error) res.status(400).send({message: error.errmsg});
//
//       else res.status(200).json(newUser);
//     });
//   });
