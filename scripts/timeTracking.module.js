
(function(){

  'use strict';

  var API_HOME = 'https://api.github.com';

  var app = angular.module('time-tracking', ['ngRoute', 'ngAnimate', 'ngResource', 'ngCookies']);
  app.API_HOME = API_HOME;

  app.config(function($routeProvider) {

    app.$routeProvider = $routeProvider;

  });

})();

