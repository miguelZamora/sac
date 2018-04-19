'use strict';

angular.module('test',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Usuarios',{templateUrl:'views/Usuarios/search.html',controller:'SearchUsuariosController'})
      .when('/Usuarios/new',{templateUrl:'views/Usuarios/detail.html',controller:'NewUsuariosController'})
      .when('/Usuarios/edit/:UsuariosId',{templateUrl:'views/Usuarios/detail.html',controller:'EditUsuariosController'})
      .when('/Perfiles',{templateUrl:'views/Perfiles/search.html',controller:'SearchPerfilesController'})
      .when('/Perfiles/edit/:perfid',{templateUrl:'views/Perfiles/detail.html',controller:'EditPerfilesController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
 