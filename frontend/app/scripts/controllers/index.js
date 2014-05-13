"use strict";

module.exports = angular.module("tz.controllers", [])
  .controller("HomeController", ['$scope', require("./home_controller")])
  
  .controller("RegistrationController", ['$scope', require("./registration_controller")])
  .controller("LoginController", ['$scope', require("./login_controller")])
  .controller("LoginFormController", ['$scope', require("./login-form_controller")])
  .controller("LogoutController", ['$scope', '$location', require("./logout_controller")])
  ;
