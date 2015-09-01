angular.module( 'dgm3760', [ 'ngMaterial','dgm3760.controllers' ] )
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('amber');
});