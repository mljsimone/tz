"use strict";

module.exports = function($scope, $location) {
  console.log("begin logoutController()");
  
  /** logout the user **/
  
  $location.path("/");
  
  console.log("end logoutController()");
};
