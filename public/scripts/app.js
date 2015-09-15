angular.module( 'dgm3760', [ 'ngRoute','ngMaterial','ngResource','dgm3760.controllers'] )
.config(function($mdThemingProvider,$routeProvider,$locationProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('amber');
  $routeProvider
    .when('/', {
      templateUrl:'partials/home',
      controller:'homeCtrl'
    })
    .when('/admin', {
      templateUrl: 'partials/admin',
      controller:'adminCtrl'
    })
    .when('/admin/add/week', {
      templateUrl: 'partials/addWeek',
      controller:'weekCtrl'
    })
    .when('/week/:weekId', {
      templateUrl: 'partials/weekDetail',
      controller: 'weekDetail'
    });
  $locationProvider
  .html5Mode(true);
});