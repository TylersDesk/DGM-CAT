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

  $scope.go = function(route) {
     $location.path(route);
  }

}])
.controller('weekCtrl', ['Week','$scope', '$mdToast', function(Week, $scope, $mdToast) {
  $scope.hasWeeks;
  $scope.weekNameInput;
  $scope.weeks;

  var allWeeks = Week.get(function(data){
    console.log(data.data);
    $scope.weeks = data.data;
    $scope.hasWeeks = data.data.length;
  });

  $scope.addWeek = function(weekNum) {
    console.log(weekNum);
    showPendingToast();
    Week.save({"week":weekNum}, 
      //Hanlde Success
      function(data) {
        console.log(data);
        showSuccessToast(weekNum);
        
        Week.get(function(data){
          $scope.weeks = data.data;
        });
      },
      // Handle Error
      function(error) {
        console.log(error);
        showFailToast(error.status)
      });

    
    $scope.weekNameInput = "";
  };

  function showPendingToast() {
    $mdToast.show({
      template:"<md-toast>Saving Week...</md-toast>",
      parent:".toast-container"          
    });
  }

  function showSuccessToast(weekNum) {
    $mdToast.show({
      template:"<md-toast>Succefully saved week " + weekNum + "</md-toast>",
      parent:".toast-container"          
    });
  };

  function showFailToast(errorStatus) {
    var errorMessage;

    switch(errorStatus) {
      case 409:
        errorMessage = "Week already exists";
        break;
      case 400:
        errorMessage = "Invalid Week Number (must be a number)";
        break;
      default:
        errorMessage = "Somethin went wrong... :("
    }

    $mdToast.show({
      template:'<md-toast class="toast-error">Failed to save Week...<br />' + errorMessage + '</md-toast>',
      parent:".toast-container"          
    });
  }


}]);