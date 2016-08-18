
(function() {

  'use strict';

  var app = angular.module('time-tracking');

  app.controller('UserCtrlr', UserCtrlr);

  function UserCtrlr($scope, $resource) {

    var self = this;
    var $rest = $resource(app.API_HOME + '/users/:userId/repos');

    self.user = $scope.$parent.user();

    $scope.projects = [];

    $scope.load = function() {

      $scope.projects =[{ name:'teste', open_issues: 10, description: 'Blablabla' }];
      return;

      $rest.query({ userId: self.user.login }).$promise.then(function(r) {

        $scope.projects = r;
        var project;

        for (var i = 0; i < $scope.projects.length; i++) {

          project = $scope.projects[i];

          //console.log(project.name);

          /*$rest.query({
            userId: $scope.user.login,
            repoId: project.name })
          .$promise
          .then(function(a) {

            console.log(a);
            
          });*/
          
        }

      });

    };

  };

})();


