angular.module( 'dgm3760', [ 'ngRoute','ngMaterial','ngResource','dgm3760.controllers'] )
.config(function($mdThemingProvider,$routeProvider,$locationProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('amber');
  $routeProvider
    .when('/', {
      templateUrl:'partials/week4'
    })
    .when('/admin', {
      templateUrl: 'partials/admin',
      controller:'adminCtrl'
    })
    .when('/admin/add/week', {
      templateUrl: 'partials/addWeek',
      controller:'weekCtrl'
    })
    .when('/week/2', {
      templateUrl: 'partials/week2'
    })
    .when('/week/3', {
      templateUrl: 'partials/week3'
    }).
    when('/week/4', {
      templateUrl: 'partials/week4'
    });
  $locationProvider
  .html5Mode(true);
});