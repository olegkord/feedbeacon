'use strict';

angular.module('FeedBeacon',[
  'ui.router',
])
  .controller('UsersController', UsersController)
  .factory('User', function() {
    //include private variables here!!!

    /// IMPORTANT!
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

  UsersController.$inject = ['$rootScope','$state','$http','User'];
