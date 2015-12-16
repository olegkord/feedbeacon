'use strict';

let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let restaurantSchema = new mongoose.Schema({
  restaurantName: String,
  email: String,
  streetAddress: String,
  zipCode: String,
  foodTypes: [],

  created_at: Date,
  updated_at: Date
})

//middleware
restaurantSchema.pre('save', function(next) {
  let user = this;
  if(!user.isModified('password')) return next();

  bcrypt.genSalt(5, (err,salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (error,hash) => {
      if(error) return next(error);

      user.password = hash;
      next();
    });
  });
});

restaurantSchema.methods.authenticate = function(password,callback) {

  bcrypt.compare(password, this.password, (err, isMatch) => {
    callback(null, isMatch);
  });
}
//end middleware

let User = mongoose.model('User', userSchema);

module.exports = Restaurant;
