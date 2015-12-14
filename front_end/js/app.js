angular.module('FeedBeacon',[
  'ui.router',
])
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$http','$state'];
