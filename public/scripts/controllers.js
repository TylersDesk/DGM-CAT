angular.module('dgm3760.controllers', ['dgm3760.services.weeks'])
.controller('weekDetail', [ 'Week', '$scope', '$routeParams', function mainView(Week,$scope,$routeParams,$location){
  
  var thisWeek = Week.get({weekId:$routeParams.weekId},function(data){
    $scope.weekData = data;
  });

}])
.controller('homeCtrl', ['Weeks', '$scope', '$location', function(Weeks,$scope,$location){
  var allWeeks = Weeks.get(function(weeks){
    console.log(weeks.data);
    $scope.weeks = weeks.data;
  });

  $scope.goTo = function(aWeek) {
    console.log(aWeek);
    $location.path('/week/' + aWeek.week);
  };
}])
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
.controller('adminCtrl', ['$scope', '$mdToast', '$location', function($scope,$mdToast,$location){

  $scope.go = function(route) {
     $location.path(route);
  }
}])
.controller('weekCtrl', ['Weeks','$scope', '$mdToast', function(Weeks, $scope, $mdToast) {
  $scope.hasWeeks;
  $scope.weekNameInput;
  $scope.weeks;
  $scope.weekTopics = [];

  $scope.startDate = new Date();
  $scope.endDate = new Date();

  var allWeeks = Weeks.get(function(data){
    console.log(data.data);
    $scope.weeks = data.data;
    $scope.hasWeeks = data.data.length;
  });

  $scope.addWeek = function(weekNum,weekTopics) {
    console.log(weekNum,weekTopics);
    showPendingToast();
    
    Weeks.save({"week":weekNum, "topics":weekTopics, "weekStart":$scope.startDate ,"weekEnd":$scope.endDate}, 
      //Hanlde Success
      function(data) {
        console.log(data);
        showSuccessToast(weekNum);
        
        Weeks.get(function(data){
          $scope.weeks = data.data;
        });

        //Clear all the set Values;
        $scope.weekNameInput = "";
        $scope.startDate = new Date();
        $scope.endDate = new Date();
        $scope.weekTopics = [];
      },
      // Handle Error
      function(error) {
        console.log(error);
        showFailToast(error.status)
      });
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