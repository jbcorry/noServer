angular.module('noServer')
.controller('nameCtrl', function($scope) {

  // $scope.namesRef = function() {
  //   return nameSvc.getNames();
  // }
  //
  // $scope.names = $firebaseObject($scope.namesRef);
  //
  // $scope.createName = function(player1, player2){
  //   $scope.names.$add({
  //     player1: player1,
  //     player2: player2
  //   })
  // }





  $scope.getPlayerNames = function() {
    $scope.p1 = prompt('Player 1 enter your name. ');
    $scope.p2 = prompt('Player 2 enter your name. ');
  }

  $scope.getPlayerNames();
})
