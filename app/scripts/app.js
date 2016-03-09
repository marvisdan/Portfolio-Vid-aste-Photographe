'use strict';

/**
 * @ngdoc overview
 * @name siteApp
 * @description
 * # siteApp
 *
 * Main module of the application.
 */
var app = angular
  .module('sitedesophie', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'routeAppControllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller:'MainCtrl',
        ControllerAs:'main'
      })
      .when('/realisation', {
        templateUrl: 'views/realisations.html',
        controller: 'realisationCtrl',
        controllerAs:'realisations'
      })
      .when('/critiques',{
        templateUrl: 'views/critiques.html',
        controller: 'critiqueCtrl'
      })
      .when('/moi',{
        templateUrl: 'views/moi.html',
        controller:'moiCtrl'
      })
      .when('/photographie',{
        templateUrl: 'views/photographies.html',
        controller: 'photoCtrl'
      })
      .when('/modele',{
        templateUrl: 'views/modele.html',
        controller: 'modeleCtrl'
      })
      .when('/paysage',{
        templateUrl: 'views/paysage.html',
        controller: 'paysageCtrl'
      })
      .when('/fiction',{
        templateUrl: 'views/fiction.html',
        controller: 'fictionCtrl'
      })
      .when('/documentaire',{
        templateUrl: 'views/documentaire.html',
        controller: 'documenataireCtrl'
      })
      .when('/cv',{
        templateUrl: 'views/cv.html',
        controller: 'cvCtrl'
      })
      .when('/autre',{
        templateUrl: 'views/autre.html',
        controller: 'autreCtrl'
      })
      .when('/miseenscene',{
        templateUrl: 'views/miseenscene.html',
        controller: 'miseensceneCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  var routeAppControllers = angular.module('routeAppControllers', []);
