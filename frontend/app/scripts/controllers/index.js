"use strict";

module.exports = angular.module("tz.controllers", [])
  .controller("HomeController", ['$scope', require("./home_controller")])
  
  .controller("SignupController", ['$scope', require("./signup_controller")])
  .controller("SignupFormController", ['$scope', '$location', 'User', require("./signup-form_controller")])
  
  .controller("SigninController", ['$scope', require("./signin_controller")])
  .controller("SigninFormController", ['$scope', require("./signin-form_controller")])
  
  .controller("SignoutController", ['$scope', '$location', require("./signout_controller")])
  ;
