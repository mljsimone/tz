"use strict";

module.exports = angular.module("tz.controllers", []).
  controller("HomeController", ['$scope', require("./home_controller")]).
  controller("SignupController", ['$scope', '$location', 'User', require("./signup_controller")]).
  controller("SigninController", ['$scope', '$window', '$location', 'Session', require("./signin_controller")]).
  controller("SignoutController", ['$scope', '$location', require("./signout_controller")]);
