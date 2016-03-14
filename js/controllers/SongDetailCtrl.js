"use strict";

MusicHistory.controller("SongDetailCtrl",
[
  "$scope",
  "$routeParams",
  "$http",
  "$location",
  "songFactory",

  ($scope, $routeParams, $http, $location, songFactory) => {

    // Default properties for bound variables
    $scope.track_list = [];
    $scope.selectedSong = {};

    // Invoke the promise that reads from Firebase
    songFactory().then(

      // Handle resolve() from the promise
      songCollection => {
        Object.keys(songCollection).forEach(key => {
          songCollection[key].id = key;
          $scope.track_list.push(songCollection[key]);
        });

        $scope.selectedSong = $scope.track_list.filter(song => song.id === $routeParams.songId)[0];
      },

      // Handle reject() from the promise
      err => console.log(err)
    );

    /*
      This function is bound to an ng-click directive
      on the button in the view
    */
    $scope.deleteSong = () => $http
        .delete(`https://incandescent-inferno-4575.firebaseio.com/track_list/${$routeParams.songId}.json`)
        .then(() => $location.url("/"));
  }
]);


