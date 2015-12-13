'use strict';
  UsersController.$inject = ['$http'];

  console.log('usercontroller loaded!');

  function UsersController($http) {
    let self = this;

    self.all = [];

    self.newUser = {};

    //self.updateUser = updateUser;
    //self.deleteUser = deleteUser;

//class methods:
    self.addUser = function() {
      console.log('adding a user!');
      $http
        .post('http://localhost:3000/users', self.newUser)
        .then( (response) => {
          getUsers();
        });
        self.newUser = {};
    }

    self.updateUser = function() {
      console.log('updating user');
    }

    self.deleteUser = function() {
      console.log('deleting a user');
    }

  }
