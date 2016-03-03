angular.module('noServer')
.directive('connect4', function() {
  return {
    restrict: 'E',
    templateUrl: '/directives/connect4DirectiveTemp.html',
    scope: {},
    controller: 'connect4Ctrl',

  }
})
