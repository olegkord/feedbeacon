'use strict';

let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let restaurantSchema = new mongoose.Schema({
  restaurantName: String,
  email: String,
  streetAddress: String,
  zipCode: String,
  foodTypes: [],
  password: String,

  created_at: Date,
  updated_at: Date
})

//middleware
restaurantSchema.pre('save', function(next) {
  let restaurant = this;
  if(!restaurant.isModified('password')) return next();

  bcrypt.genSalt(5, (err,salt) => {
    if (err) return next(err);
    bcrypt.hash(restaurant.password, salt, (error,hash) => {
      if(error) return next(error);

      restaurant.password = hash;
      next();
    });
  });
});

restaurantSchema.methods.authenticate = function(password,callback) {
  debugger;
  bcrypt.compare(password, this.password, (err, isMatch) => {
    callback(null, isMatch);
  });
}
//end middleware

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
