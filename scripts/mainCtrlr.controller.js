
(function() {

  'use strict';

  var app = angular.module('time-tracking');

  app.controller('MainCtrlr', MainCtrlr);

  function MainCtrlr($scope, $resource, $location, $cookies) {

    var self = this;
    var $rest = $resource(app.API_HOME + '/users/:userId');

    $scope.auth = { };

    $scope.registerRoutes = function() {

      //console.log($scope.loggedIn());

      $scope.loggedIn() ? registerPrivateRoutes() : registerPublicRoutes();

    };

    $scope.user = function() {

      return $cookies.getObject('user') || { };

    };

    $scope.loggedIn = function() {

      //console.log('User is logged in?', $scope.user().id != null);
      //console.log('User:', $scope.user());

      return $scope.user().id != null;

    };

    $scope.logout = function() {

      self.updateUser({ });

    };

    $scope.login = function() {

      $rest.get({ userId: $scope.auth.login }).$promise.then(function(r) {

        self.updateUser(r);

      });

    };

    self.updateUser = function(user) {

        $cookies.putObject('user', user);

        $scope.registerRoutes();

        $location.path('/');
    };

  };

  function registerPublicRoutes() {

    app.$routeProvider
      .when('/login', {
        templateUrl: 'views/login/',
        controller: 'MainCtrlr'
      })
      .when('/', {
        redirectTo: '/login'
      })
      .otherwise({
        redirectTo: '/login'
      });

  }

  function registerPrivateRoutes() {

    app.$routeProvider
      .when('/login', {
        redirectTo: '/'
      })

      .when('/projects', {
        templateUrl: 'views/projects/'
      })

      .when('/', {
        templateUrl: 'views/'
      })
      .otherwise({
        redirectTo: '/'
      });

  }
})();


