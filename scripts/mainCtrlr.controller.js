
(function() {

  'use strict';

  var app = angular.module('time-tracking');

  app.controller('MainCtrlr', MainCtrlr);

  function MainCtrlr($scope, $resource) {

    var self = this;

    $scope.user = { login: 'augusteiner' };

    var $rest = $resource(app.API_HOME + '/users/:userId');

    $scope.load = function() {

      $rest.get({ userId: $scope.user.login }).$promise.then(function(r){

        angular.extend($scope.user, r);

      });

    };

  };

})();


