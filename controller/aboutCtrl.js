angular.module('noServer')
.controller('aboutCtrl', function($scope, mainService) {

    $scope.aboutMe = mainService.getMyInfo();

})
