var app = angular.module("SongApp", ['ngRoute']);

app.config(['$routeProvider',  // dependencies
  function($routeProvider) {
    $routeProvider.
      when('/', { // when it matches this
        templateUrl: 'partials/song-list.html', // load this
        controller: 'SongCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      }).
      otherwise({
        redirectTo: '/' // otherwise go here
      });
  }]);