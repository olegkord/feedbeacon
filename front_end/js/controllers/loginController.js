'use strict';
  LoginController.$inject = ['$http'];

  console.log('login controller loaded');
  function LoginController(){
    let self = this;

    self.all = [];
    self.loginUser = {};

    self.signIn = function() {
      console.log('logging in user!');
    }

//debug purposes only.
    // this.fart = function() {
    //   console.log('This is sad.');
    // }
  }
