'use strict';

angular.module('FeedBeacon',[
  'ui.router',
])
  .controller('UsersController', UsersController)
  .factory('User', function() {
    return {
      isLoggedIn: false,
      currentUser: {},
      userForLogin: {}
    };
  })
  .run(['$rootScope','$state','User', function($rootScope, $state, User) {
    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
      let isAuthenticationRequired = toState.data
        && toState.data.requiresLogin
        && !User.isLoggedIn;

      if (isAuthenticationRequired) {
        event.preventDefault();
        $state.go('login')
      }
    })
  }]);


  // .service(['User', '$http', function() {
  //   service = this;
  //
  //   service.authenticate = function($http) {
  //     $http({
  //       method: 'GET',
  //       url: 'http://localhost:3000/auth'
  //     }).then( (response) => {
  //       return response
  //     })
  //   }
  // }])
  UsersController.$inject = ['$rootScope','$state','$http','User'];
