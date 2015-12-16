'use strict';

let Restaurant = require('../models/restaurant');

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const secret = 'posholnahuisuka';

//GET
function getRestaurant(req,res) {
  console.log('getting a restaurant')

}

function getAll(req,res) {
  console.log('hit get all restaurants route');
  Restaurant.find( (error,restaurants) => {
    if (error) response.json({message: 'No restaurants found. error.'});

    res.json(restaurants)
  });
}

function auth(req,res) {
  console.log('Authenticating restaurant HTTP header token');
  return res.status(200).send({message:'Token OK'});
}
//Post
function newRestaurant(req,res) {
  console.log('hit create new restaurant route');

  let restaurant = new Restaurant(req.body);

  restaurant.save( (error) => {
    if (error) res.json({message: 'Could not create new restaurant because of:' + error});

    res.json(restaurant);
  });
}

function loginRestaurant(req, res) {
  console.log('hit log in restaurant route');
  let restaurantParams = req.body;
  Restaurant.findOne({email: restaurantParams.email}, (err,restaurant) => {
    if (err) {
       throw err;
    }
    else if (!restaurant) {
       res.status(500).json({message: "restaurant not found"})
    }
    else {
    restaurant.authenticate(restaurantParams.password, (error, isMatch) => {
      if (error) throw error;

      if (isMatch) {
        let token = jwt.sign(restaurant, secret, {expiresIn: 1444000});
        res.json({
          success: true,
          message: 'Authorization successful',
          restaurant: restaurant._doc,
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
function updateRestaurant(req, res) {
  console.log('hit update restaurant route!');
  //this will update restaurant tags:

  let restaurantId = req.params.id;
  let newTag = req.body.newTag;
  let pullTag = req.body.pullTag;

  if (pullTag) {
    Restaurant.findByIdAndUpdate(
      restaurantID,
      {$pull: {foodTypes: pullTag}},
      {new: true},
      (error, restaurant) => {
        if(error) res.status(400).send({message: error.errmsg});

        else return res.status(202).json(restaurant);
      });
    }

  else if (newTag) {
    Restaurant.findByIdAndUpdate(
      restaurantID,
      {$push: {foodTypes: newTag}},
      {new: true},
      (error, restaurant) => {
        if(error) res.status(400).send({message: error.errmsg});

        else return res.status(202).json(restaurant);
      })
    };
  }


module.exports = {
  getAll: getAll,
  loginRestaurant: loginRestaurant,
  newRestaurant: newRestaurant,
  auth: auth,
  getRestaurant: getRestaurant,
  updateRestaurant: updateRestaurant
}
