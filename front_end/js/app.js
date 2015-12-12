angular.module('FeedBeacon',[
  'ui.router'
])
  .config(AppRouter);

  function AppRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home")

    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: '../templates/signup.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../templates/login.html'
      })
      .state('login_user', {
        url: '/login/user',
        templateUrl: '../templates/loginUser.html'
      })
      .state('login_restaurant', {
        url: '/login/restaurant',
        templateUrl: '../templates/loginRestaurant.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html'
      })
  }
