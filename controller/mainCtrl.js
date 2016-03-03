angular.module('noServer')
.controller('mainCtrl', function($scope, mainService){

  $scope.tabs = mainService.getTabs();

  $scope.projects = mainService.getProjects();


})
