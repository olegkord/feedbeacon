'use strict';

console.log('usercontroller loaded!');

function UsersController($rootScope, $state, $http, User) {

  let self = this;

  self.newUser = {};
  self.logInUser = {};

//class methods
  self.signIn = function() {
    console.log('logging in user!');
    if (Object.keys(self.logInUser)) {
      User.userForLogin = self.logInUser;
    }
    $http({
      method: 'POST',
      url: 'http://localhost:3000/user/login',
      data: User.userForLogin,
      headers: {'Content-Type': 'application/json'}
    }).then( (data) => {
      User.isLoggedIn = true;
      User.currentUser = data.data.user;
      $http.defaults.headers.common.Authorization = data.data.token;
      $state.go('user_show', {id: data.data.user._id});
    })
  },

  self.signOut = function(user) {
    console.log('logging out user!');
    $http.defaults.headers.common.Authorization = '';
    User.isLoggedIn = false;
    User.currentUser = {};
    User.userForLogin = {};
    $state.go('home');
  }

  self.addUser = function(user) {
    console.log('adding a user!');
    self.newUser.foodTypes.split(',');
    $http({
      method: 'POST',
      url: 'http://localhost:3000/user/new',
      data: self.newUser,
      headers: {'Content-Type': 'application/json'}
    }).then( (user) => {
      $state.go('login');
    });
  }

    self.getCurrentUser = function() {
      console.log('Getting current user');
      return User.currentUser;
    }

    self.updateUser = function() {
      console.log('updating user');
    }

    self.deleteUser = function() {
      console.log('deleting a user');
    }

  }
