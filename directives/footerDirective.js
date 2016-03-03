angular.module('noServer')
.directive('footy', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/directives/footerDirectiveTemp.html',
    scope: {},
    controller: 'mainCtrl',

  }
})
