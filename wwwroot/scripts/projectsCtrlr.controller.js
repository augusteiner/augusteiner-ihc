
(function() {

  'use strict';

  var app = angular.module('time-tracking');

  app.controller('ProjectsCtrlr', ProjectsCtrlr);

  function ProjectsCtrlr($scope, $resource) {

    var $rest = $resource(app.API_HOME + '/users/:userId');

  }

})();


