angular.module( 'dgm3760.services.weeks', ['ngResource'])
.factory('Weeks', ['$resource', function($resource) {

  var Weeks = $resource('/api/weeks');

  return Weeks;

}])
.factory('Week', ['$resource', function($resource){
	var Week = $resource('/api/week/:weekId');

	return Week;
}]);