(function() {
  var app = angular.module('scrum', ['ngResource']);

  app.factory("Scrum", function($resource) {
    return $resource("http://astroscrum-api.herokuapp.com/v1/scrum", {}, {
      query: {
        method: "GET",
        isArray: false,
        headers: {
          'X-Auth-Token': '20e8e02d635ff948ad3c73a546970dbf'
        }
      }
    });
  });

  app.controller("scrumController", function($scope, Scrum) {
    Scrum.query(function(data) {
      $scope.scrum = data.scrum;
    });
  });

})();
