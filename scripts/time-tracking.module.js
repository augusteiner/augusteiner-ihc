
(function(){

  'use strict';

  var API_HOME = 'https://api.github.com';

  var app = angular.module('time-tracking', ['ngRoute', 'ngAnimate', 'ngResource']);
  app.API_HOME = API_HOME;

  app.config(function($routeProvider) {

    app.$routeProvider = $routeProvider;

    $routeProvider
      .when('/login', {
        templateUrl: 'views/login/',
        controller: 'MainCtrlr'
      })
      .otherwise({
        redirectTo: '/login'
      });

  });

})();

