"use strict";

module.exports = function($scope, $window, $location, Session) {
  var submit = $("#sif-submit");
  $scope.wrongCredentials = false;
  $scope.credentials = { email: "mljsimone@gmail.com", password: "1234" }; /* ToDo: Remove this. */
  
  $scope.onSubmit = function() {
    submit.button("loading");
    
    var session = new Session($scope.credentials);
    
    session.
      $save().
      then(function(data) {
        $scope.wrongCredentials = false;
        $window.sessionStorage.token = data.token;
        $location.path("/timezones");
      }).
      catch(function() {
        $scope.wrongCredentials = true;
        delete $window.sessionStorage.token;
      }).
      finally(function() {
        submit.button("reset");
      });
  }
};
