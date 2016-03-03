angular.module('noServer')
.controller('portCtrl', function($scope, mainService){

  $scope.portfolio = mainService.getPortfolio();

})
