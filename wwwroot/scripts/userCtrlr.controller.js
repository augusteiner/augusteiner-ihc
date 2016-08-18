
(function() {

  'use strict';

  var app = angular.module('time-tracking');

  app.controller('UserCtrlr', UserCtrlr);

  function UserCtrlr($scope, $resource) {

    var self = this;
    var $parent = $scope.$parent;
    var $rest = $resource(app.API_HOME + '/notifications?access_token=' + $parent.settings.accessToken);

    self.user = $scope.$parent.user();

    $scope.timeline = [];

    $scope.load = function() {

      $rest.query().$promise.then(function(r) {

        $scope.timeline = r;

      });

    };
  };
})();


