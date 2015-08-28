angular.module('dgm3760.controllers', []).controller('menuCtrl', ['$scope','$mdSidenav','$mdUtil', '$log', function($scope,$mdSidenav,$mdUtil,$log){
	
	$scope.myscope = "it works";
	
	$scope.toggleLeft = buildToggler('left');
	
	$scope.close = function() {
		$mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
	}

	/**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },200);
      return debounceFn;
    }
}]);