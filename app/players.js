(function() {
  var app = angular.module('players', ['ngResource']);

  app.factory("Player", function($resource) {
    return $resource("http://astroscrum-api.herokuapp.com/v1/players/:id", {}, {
      query: {
        method: "GET",
        isArray: false,
        headers: {
          'X-Auth-Token': '20e8e02d635ff948ad3c73a546970dbf'
        }
      }
    });
  });

  app.controller("playersController", function($scope, Player) {
    Player.query(function(data) {
      $scope.players = data;
    });

    $scope.showModal = function() {
      $('.ui.modal').modal({ blurring: true }).modal('show');
    }

    $scope.remove = function(player) {
      Player.remove({ id: player.id }, function() {
        $scope.players.forEach(function(p, index) {
          if (p.id == player.id) $scope.players.splice(index, 1);
        });
      });
    }
  });

  app.controller("playerController", function($scope, Player) {
    $scope.get = function(slackId) {
      Player.get({ id: "U0485M91U" }, function(data) {
        $scope.player = data;
      });
    }
  });

})();
