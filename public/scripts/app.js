angular.module( 'dgm3760', [ 'ngRoute','ngMaterial','ngResource','dgm3760.controllers'] )
.config(function($mdThemingProvider,$routeProvider,$locationProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('amber');
  $routeProvider
    .when('/', {
      templateUrl:'partials/home'
    })
    .when('/admin', {
      templateUrl: 'partials/admin',
      controller:'adminCtrl'
    });
  $locationProvider
  .html5Mode(true);
});