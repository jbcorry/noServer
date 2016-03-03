angular.module('noServer')
.controller('contactCtrl', function($scope, mainService){

  $scope.myContactInfo = mainService.getMyContactInfo();

})
