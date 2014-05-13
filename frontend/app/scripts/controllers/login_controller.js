"use strict";

var l = console.log;

module.exports = function($scope) {
  console.log("begin loginController()");
  console.log("end loginController()");

  $scope.onLogin = function() {
    l("begin onLogin");
  }
};
