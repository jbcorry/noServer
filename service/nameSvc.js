angular.module('noServer')
.service('nameSvc', function(fb) {
  var firebaseRef = new Firebase('https://sizzling-fire-8780.firebaseio.com/');
  this.getNames = function(){
    return new Firebase(fb.url + '/names');
  }
})
