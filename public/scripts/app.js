angular.module( 'dgm3760', [ 'ngRoute','ngMaterial','dgm3760.controllers' ] )
.config(function($mdThemingProvider,$routeProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('amber');
  $routeProvider.when('/', {
    templateUrl:'partials/test'
  });
});