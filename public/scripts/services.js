angular.module( 'dgm3760.services.weeks', ['ngResource'])
.factory('Week', ['$resource', function($resource) {

  var Week = $resource('/api/weeks');

  return Week;

}]);