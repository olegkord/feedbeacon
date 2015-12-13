'use strict';
angular.module('FeedBeacon')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$http'];

  console.log('usercontroller loaded!');

  function UsersController($http) {
    let self = this;

    self.all = [];
    self.addUser = addUser;
    self.newUser = {};
    // self.getUsers = getUsers;
    // self.deleteUser = deleteUser;

    function addUser() {
      console.log('adding a user!');
    //   $http
    //     .post('http://localhost:3000/users', self.newUser)
    //     .then( (response) => {
    //       getUsers();
    //     });
    //     self.newUser = {};
    }

  }
