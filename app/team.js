(function() {
  var app = angular.module('team', ['ngResource']);

  app.factory("Team", function($resource) {
    return $resource("http://astroscrum-api.herokuapp.com/v1/team", {}, {
      query: {
        method: "GET",
        isArray: false,
        headers: {
          'X-Auth-Token': '20e8e02d635ff948ad3c73a546970dbf'
        }
      }
    });
  });

  app.controller("teamController", function($scope, Team) {
    Team.query(function(data) {
      $scope.team = data.team;
    });
  });

})();
