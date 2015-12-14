'use strict';

angular.module('FeedBeacon',[
  'ui.router',
])
  .controller('UsersController', UsersController);
  UsersController.$inject = ['$http','$state','$rootScope'];

//example user URL: http://localhost:8080/#/user/566f09ae35f1e4630968d7f3
  console.log('usercontroller loaded!');

  function UsersController($http,$state,$rootScope) {

    let self = this;

    self.all = [];

    self.loginUser = {};
    self.newUser = {};
    self.currentUser = {};

    //self.updateUser = updateUser;
    //self.deleteUser = deleteUser;

//class methods:
    self.signIn = function() {
      if(Object.keys(self.currentUser).length === 0){
        console.log('logging in user!');
        $http({
          method: 'POST',
          url: 'http://localhost:3000/user/login',
          data: self.loginUser,
          headers: {'Content-Type': 'application/json'}
        }).then( (data) => {
          self.currentUser = data.data.user;
          $http.defaults.headers.common.Authorization = data.data.token;
          $window.localStorage.accessToken = data.data.token;
          $rootScope.currentUser = data.data.user;
          $state.go('user_show', {id: data.data.user._id});
        })
      }
      else {
        alert('You are already signed in!');
      }
    },

    self.signOut = function() {
      console.log('signing out user!');

    }

    self.addUser = function() {
      console.log('adding a user!');
      self.newUser.foodTypes.split(',');
      $http({
        method: 'POST',
        url: 'http://localhost:3000/user',
        data: self.newUser,
        headers: {'Content-Type': 'application/json'}
      }).then( (user) => {
        self.currentUser = user.data;
        $state.go('user_show', {id: user.data._id});
      });
    }

    self.getUsers = function() {

    }

    self.updateUser = function() {
      console.log('updating user');
    }

    self.deleteUser = function() {
      console.log('deleting a user');
    }

  }
