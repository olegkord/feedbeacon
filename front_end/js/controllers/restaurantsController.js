'use strict';

console.log('restaurant controller loaded');

function RestaurantsController($rootScope, $state, $http, User, Socket) {

  let self = this;

  self.newResto = {};
  self.logInResto = {};

  self.signIn = function() {
    if (Object.keys(self.logInResto)) {
      Restaurant.restoUserForLogin = self.logInResto;
    }
    $http({
      method: 'POST',
      url: 'http://localhost:3000/restaurant/login',
      data: Restaurant.userForLogin,
      headers: {'Content-Type': 'application/json'}
    }).then( (data) => {
      Restaurant.isLoggedIn = true;
      Restaurant.currentRestoUser = data.data.user;
      $http.defaults.headers.common.Authorization = data.data.token;
      $state.go('resto_show', {id: data.data.user._id});
    })
  }

  self.signOut = function(resto) {
    $http.defaults.headers.common.Authorization = '';
    Restaurant.isLoggedIn = false;
    Restaurant.currentRestoUser = {};
    Restaurant.restoUserForLogin = {};
    $state.go('home');
  }

}
