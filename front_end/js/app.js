'use strict';

angular.module('FeedBeacon',[
  'ui.router',
])
  .controller('UsersController', UsersController)
  .controller('RestaurantController', RestaurantController)
  .factory('User', function() {
    //include private variables here!!!

    /// IMPORTANT!
    return {
      isLoggedIn: false,
      currentUser: {},
      userForLogin: {}
    };
  })
  .factory('Restaurant', function() {
    //local variables here

    //
    return {
      isLoggedIn: false,
      currentRestoUser: {},
      restoUserForLogin: {}
    }
  })
  .factory('Socket', Socket)
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

  UsersController.$inject = ['$rootScope','$state','$http','User', 'Socket'];
  RestaurantController.$inject = ['$rootScope', '$state', '$http', 'Restaurant', 'Socket']
  Socket.$inject = ['$rootScope']
