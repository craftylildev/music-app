"use strict";

MusicHistory.controller("SongCtrl", [
  "$scope",
  "$location",
  "songFactory",

  ($scope, $location, songFactory) => {
    // Default property values for keys bound to input fields
    $scope.songSearchText = {album: "", artist: "", song: "", genre: ""};
    $scope.query = "";
    $scope.track_list = [];

    // Invoke the promise that reads from Firebase
    songFactory().then(
      // Handle resolve() from the promise
      songCollection => Object.keys(songCollection).forEach(key => {
        songCollection[key].id = key;
        $scope.track_list.push(songCollection[key]);
      }),
      // Handle reject() from the promise
      err => console.log(err)
    );

    // checkbox filter
    
    $scope.chkBoxFilter = function (song) {
      console.log("song", song.chkBoxFilter);
      if (song.chkBoxFilter === true) {
        return song;
      }
    }  


  }
]);




