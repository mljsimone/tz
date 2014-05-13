"use strict";

module.exports = function($scope, $http) {
  console.log("begin registrationFormController()");
  console.log("end registrationFormController()");
  
  $scope.onSubmit = function() {
    console.log("begins onSubmit");
    
    var credentials = { 'username': 'ack', 'password': 'rollercoster' };
    
    $http
      .post("/api/v1/sessions", credentials)
      .success(function (data, status, headers, config) {
        console.log(".sucess");
      })
      .error(function (data, status, headers, config) {
        console.log(".error");
      });
  }
  
  console.log("ends onSubmit");
};
