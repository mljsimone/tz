"use strict";

module.exports = function($scope, $rootScope, $location, Authentification) {
  var submit = $("#sif-submit");
  
  $scope.wrongCredentials = false;
  $scope.credentials = { email: "mljsimone@gmail.com", password: "123" };
  
  $scope.onSubmit = function() {
    submit.button("loading");
    
    var promise = Authentification.signIn($scope.credentials);
    
    promise.then(function() {
      // Hide the error message on the view.
      $scope.wrongCredentials = false;

      // Notify all watcher that we just had a successful sign in.
      $rootScope.$broadcast(Authentification.events.signInSuccess);
      
      // Redirect the user to the list of timezones.
      $location.path("/timezones");
    }).catch(function() {
      // Show the error message on the view.
      $scope.wrongCredentials = true;
      
      // Notify all watcher that we just had a unsuccessful sign in.
      $rootScope.$broadcast(Authentification.events.signInFailed);
    }).finally(function() {
      submit.button("reset");
    });
  };
};
