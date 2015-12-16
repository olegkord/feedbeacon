'use strict';
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let jwt = require('jsonwebtoken');

let secret = 'posholnahuisuka';

let restaurants_controller = require('../controllers/restaurants_controller');

router.route('/restaurant/login')
  .post(restaurants_controller.loginRestaurant);

router.route('/restaurant/new')
  .post(restaurants_controller.newRestaurant);

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

// http://localhost:3000/restaurant
router.route('/restaurant')
  //GET all restaurants
  .get(restaurants_controller.getAll)

router.route('/restaurant/authenticate')
  .get(restaurants_controller.auth);


router.route('/restaurant/:id')
  .get(restaurants_controller.getRestaurant)

  .put(restaurants_controller.updateRestaurant)

module.exports = router;
