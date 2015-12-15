'use strict';

angular.module('FeedBeacon',[
  'ui.router',
//  'angular-storage'
])
  .controller('UsersController', UsersController)
  .factory('User', function() {
    return { isLoggedIn: false };
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
