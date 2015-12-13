'use strict';
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');

let users_controller = require('../controllers/users_controller');

// http://localhost:3000/user
router.route('/user')
  //GET all users
  .get(users_controller.getAll)

  //Post a new criminal
  .post(users_controller.newUser);

module.exports = router;
