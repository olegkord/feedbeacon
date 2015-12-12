angular.module('FeedBeacon',[
  'ui.router'
])
  .config(AppRouter);

  function AppRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home")

    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'signup.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
  }
