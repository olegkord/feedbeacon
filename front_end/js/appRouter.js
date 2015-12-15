angular.module('FeedBeacon')
  .config(AppRouter);

  function AppRouter($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/home")
    //$httpProvider.interceptors.push('APIInterceptor');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'js/templates/home.html'
      })
      .state('signup', {
        url: '/signup/user',
        templateUrl: 'js/templates/signupUser.html'
      })
      .state('signout', {
        url: '/signout/user',
        templateUrl: 'js/templates/home.html'
      })
      .state('signup_restaurant', {
        url: '/signup/restaurant',
        templateUrl: 'js/templates/signupRestaurant.html'
      })
      .state('login', {
        url: '/login/user',
        templateUrl: 'js/templates/loginUser.html',
      })
      .state('login_restaurant', {
        url: '/login/restaurant',
        templateUrl: 'js/templates/loginRestaurant.html'
      })
      .state('user_show', {
        url: '/user/:id',
        templateUrl: 'js/templates/userProfile.html',
        data: {requiresLogin: true}
      })
    }
