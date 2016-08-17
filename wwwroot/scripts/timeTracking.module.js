
(function(){

  'use strict';

  var API_HOME = 'https://api.github.com';

  var app = angular.module(
    'time-tracking', [
      'ngRoute',
      'ngAnimate',
      'ngResource',
      'ngCookies',

      'angular-loading-bar']);

  app.API_HOME = API_HOME;

  app.config(function($routeProvider) {

    app.$routeProvider = $routeProvider;

  });

  app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeSpinner = false;
  }]);

  app.config(['$httpProvider', function($httpProvider) {

    // initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors

    // disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
  }]);

})();

