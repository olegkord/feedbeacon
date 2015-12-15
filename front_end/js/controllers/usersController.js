'use strict';

  console.log('usercontroller loaded!');

  function UsersController($rootScope, $state, $http, User) {

    let self = this;


    self.all = [];

    self.newUser = {};
    self.logInUser = {};
    self.currentUser = {};
    //self.updateUser = updateUser;
    //self.deleteUser = deleteUser;

//class methods:
  self.signIn = function(user) {
    // LoginService.login(user)
    //   .then( (response) => {
    //     user.access_token = response.data.id;
    //     self.currentUser = user
    //   });


     console.log('logging in user!');
     $http({
       method: 'POST',
       url: 'http://localhost:3000/user/login',
       data: self.logInUser,
       headers: {'Content-Type': 'application/json'}
     }).then( (data) => {
       User.isLoggedIn = true;
      //  self.currentUser = data.data.user;
      //  $http.defaults.headers.common.authorization = data.data.token;
      //  $rootScope.currentUser = data.data.user;
       $state.go('user_show', {id: data.data.user._id});
     })

   },

    self.addUser = function(user) {
      console.log('adding a user!');
      // LoginService.register(user)
      //   .then( (response) => {
      //     login(user);
      //   });
      self.newUser.foodTypes.split(',');
      $http({
        method: 'POST',
        url: 'http://localhost:3000/user/new',
        data: self.newUser,
        headers: {'Content-Type': 'application/json'}
      }).then( (user) => {
        console.log(user.data);
        $rootScope.currentUser = user.data;
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
