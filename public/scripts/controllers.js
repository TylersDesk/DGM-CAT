angular.module('dgm3760.controllers', ['dgm3760.services.weeks'])
.controller('menuCtrl', ['$scope','$mdDialog', '$log', function($scope,$mdDialog,$log){
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
}])
.controller('adminCtrl', ['Week','$scope', '$mdToast', '$location', function(Week,$scope,$mdToast,$location){
  $scope.hasWeeks;
  $scope.weekNameInput;

  var allWeeks = Week.get(function(data){
    console.log(data.data.length);
    $scope.hasWeeks = data.data.length;
  });

  $scope.addWeek = function(weekNum) {
    console.log(weekNum);
    Week.save({"week":weekNum});
    showSimpleToast();
    $scope.weekNameInput = "";
  };

  $scope.go = function(route) {
     $location.path(route);
  }

  var showSimpleToast = function() {
    $mdToast.show({
      template:"<md-toast>Saving Week...</md-toast>",
      parent:".toast-container"          
    });
  };



}]);