'use strict';
angular.module('FeedBeacon')
  .controller('LoginController', LoginController);

  UsersController.$inject = ['$http'];

  console.log('login controller laoded');
  function LoginController(){
    let self = this;

    self.all = [];
    self.loginUser = {};

    function signIn() {
      console.log('logging in user!');
    }
  }
