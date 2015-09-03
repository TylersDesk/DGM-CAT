angular.module( 'dgm3760', [ 'ngRoute','ngMaterial','dgm3760.controllers' ] )
.config(function($mdThemingProvider,$routeProvider,$locationProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('amber');
  $routeProvider
    .when('/', {
      templateUrl:'partials/home'
    })
    .when('/admin', {
      templateUrl: 'partials/admin'
    });
  $locationProvider
  .html5Mode(true);
});