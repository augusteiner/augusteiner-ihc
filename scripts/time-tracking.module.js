
(function(){

  'use strict';

  var API_HOME = 'https://api.github.com';

  var app = angular.module('time-tracking', ['ngRoute', 'ngAnimate', 'ngResource']);
  app.API_HOME = API_HOME;

  app.config(function($routeProvider) {

    $routeProvider
      .when('/projects', {
        templateUrl: 'views/projects/',
        controller: 'ProjectsCtrlr'
      })
      .when('/milestones/:projectId', {
        templateUrl: 'views/milestones/',
        controller: 'MilestonesCtrlr'
      })
      .when('/tasks/:projectId', {
        templateUrl: 'views/tasks/',
        controller: 'TasksCtrlr'
      })
      .when('/main', {
        templateUrl: 'views/',
        controller: 'MainCtrlr'
      })
      .otherwise({
        redirectTo: 'main'
      });
    
  });
})();

