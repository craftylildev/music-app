"use strict";

MusicHistory.controller("SongFormCtrl",
[
  "$scope",
  "$location",
  "$http",

  ($scope, $location, $http) => {

    // Default property values for keys bound to input fields
    $scope.newSong = {
      album: "",
      artist: "",
      song: ""
    };

    // Function bound to the Add Song button in the view template
    $scope.addSong = function () {

      // POST the song to Firebase
      $http.post(
        "https://incandescent-inferno-4575.firebaseio.com/track_list.json",

        // Remember to stringify objects/arrays before
        // sending them to an API
        JSON.stringify({
          album: $scope.newSong.album,
          artist: $scope.newSong.artist,
          song: $scope.newSong.song,
          genre: $scope.newSong.genre
        })

      // The $http.post() method returns a promise, so you can use then()
      ).then(
        () => $location.url("/songs/"),      // Handle resolve
        (response) => console.log(response)  // Handle reject
      );
    };
  }
]);