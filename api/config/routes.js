'use strict';
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let jwt = require('jsonwebtoken');

let secret = 'posholnahuisuka';

let users_controller = require('../controllers/users_controller');

router.route('/user/login')
  .post(users_controller.loginUser);

router.route('/user/new')
  .post(users_controller.newUser);

//router middleware for token authentication
router.use( (req, res, next) => {
  console.log('verifying token');

  let token = req.headers.authorization;
  //decode token
  if (token) {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) res.status(401).json({message: "token was not authorized"})

      else {
        console.log('token approved');
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    return res.status(403).json({message: "Token not present"})
  }
});

// http://localhost:3000/user
router.route('/user')
  //GET all users
  .get(users_controller.getAll)

router.route('/user/authenticate')
  .get(users_controller.auth);


router.route('/user/:id')
  .get(users_controller.getUser)

  .put(users_controller.updateUser)

module.exports = router;
