"use strict";

MusicHistory.factory("songFactory", ($q, $http) =>
  () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get("https://incandescent-inferno-4575.firebaseio.com/track_list.json")
        .success(
          songCollection => resolve(songCollection),
          error => reject(error)
        )
    )
);