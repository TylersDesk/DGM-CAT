angular.module('dgm3760.controllers', []).controller('menuCtrl', ['$scope','$mdDialog', '$log', function($scope,$mdDialog,$log){
  var originatorEv;
	
  /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
  this.openMenu = function($mdOpenMenu, ev) {
    console.log(ev);
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
}]);