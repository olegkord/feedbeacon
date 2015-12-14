'use strict';

  console.log('usercontroller loaded!');

  function UsersController($http,$state,$rootScope) {
    $http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With'];



    let self = this;

    self.all = [];

    self.newUser = {}
    self.logInUser = {}
    //self.updateUser = updateUser;
    //self.deleteUser = deleteUser;

//class methods:
  self.signIn = function() {
     if(!self.currentUser){
       console.log('logging in user!');
       $http({
         method: 'POST',
         url: 'http://localhost:3000/user/login',
         data: self.logInUser,
         headers: {'Content-Type': 'application/json'}
       }).then( (data) => {
         self.currentUser = data.data.user;
         $http.defaults.headers.common.Authorization = data.data.token;
         $rootScope.currentUser = data.data.user;
         $state.go('user_show', {id: data.data.user._id});
       })
     }
     else {
       alert('You are already signed in!');
     }
   },

    self.addUser = function() {
      console.log('adding a user!');
      self.newUser.foodTypes.split(',');
      $http({
        method: 'POST',
        url: 'http://localhost:3000/user',
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
