"use strict";

module.exports = function($scope, $rootScope, Authentification) {
  $scope.session = Authentification.getSession();
  
  $rootScope.$on(Authentification.events.signInSuccess, function() {
    $scope.session = Authentification.getSession();
  });
  
  $rootScope.$on(Authentification.events.signInFailed, function() {
    $scope.session = null;
  });
  
  $rootScope.$on(Authentification.events.signOutSuccess, function() {
    $scope.session = null;
  });
  
  $rootScope.$on(Authentification.events.signOutFailed, function() {
    $scope.session = null;
  });
  
  // Little utility to generate lists using ng-repeat.
  $scope.range = function(n) {
    return new Array(n);
  };
};
