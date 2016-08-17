
(function() {

  'use strict';

  var app = angular.module('time-tracking');

  app.controller('UserCtrlr', UserCtrlr);

  function UserCtrlr($scope, $resource) {

    var self = this;
    $scope.projects = [];

    $scope.load = function() {

      $repos.get({ userId: $scope.user.login }).$promise.then(function(r) {

        $scope.projects = r.items;
        var project;

        for (var i = 0; i < $scope.projects.length; i++) {

          project = $scope.projects[i];

          //console.log(project.name);

          $miles.query({
            userId: $scope.user.login,
            repoId: project.name })
          .$promise
          .then(function(a) {

            console.log(a);
            
          });
          
        }

      });

    };

  };

})();


