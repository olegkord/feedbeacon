angular.module('FeedBeacon')
  .config(AppRouter);

  function AppRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home")

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'js/templates/home.html'
      })
      .state('signup', {
        url: '/signup/user',
        templateUrl: 'js/templates/signupUser.html'
      })
      .state('signup_restaurant', {
        url: '/signup/restaurant',
        templateUrl: 'js/templates/signupRestaurant.html'
      })
      .state('login', {
        url: '/login/user',
        templateUrl: 'js/templates/loginUser.html'
      })
      .state('login_restaurant', {
        url: '/login/restaurant',
        templateUrl: 'js/templates/loginRestaurant.html'
      })
  }
