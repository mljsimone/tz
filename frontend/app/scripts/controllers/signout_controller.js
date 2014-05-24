"use strict";

module.exports = function($rootScope, $location, Authentification) {
  var promise = Authentification.signOut();
  
  promise.then(function() {
    $rootScope.$broadcast(Authentification.events.signOutSuccess);
  }).catch(function() {
    $rootScope.$broadcast(Authentification.events.signOutFailed);
  }).finally(function() {
    $location.path("/");
  });
};
