'use strict';

  console.log('usercontroller loaded!');

  function UsersController($http) {
    $http.defaults.useXDomain = true;
    delete $http.defaults.headers.common['X-Requested-With'];

    let self = this;

    self.all = [];

    self.newUser = {}

    //self.updateUser = updateUser;
    //self.deleteUser = deleteUser;

//class methods:
    self.addUser = function() {
      console.log('adding a user!');
      self.newUser.foodTypes.split(',');
      $http({
        method: 'POST',
        url: 'http://localhost:3000/user',
        data: self.newUser,
        headers: {'Content-Type': 'application/json'}
      });
        // .post('http://localhost:3000/user', self.newUser)
        // .then( (response) => {
        //   getUsers();
        // });
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
