'use strict';

angular.module('palaskaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/whoami', {
        templateUrl: 'app/whoami/whoami.html',
        controller: 'WhoamiCtrl'
      });
  });
