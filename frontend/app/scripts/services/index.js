"use strict";

module.exports = angular.module("tz.services", []).
  service("User", ['$resource', require("./user_service")]).
  service("Session", ['$resource', require("./session_service")]).
  service("Timezone", ['$resource', require("./timezone_service")]).
  service("Authentification", ['$q', '$window', "Session", require("./authentification_service")]).
  service("AuthentificationInterceptor", ['$window', require("./authentification-interceptor_service")]);

/*
module.exports = angular.module("tz.services", []).
  factory("User", ['$resource', function() { }]).
  factory("Session", ['$resource', function() { }]).
  factory("Timezone", ['$resource', function() { }]).
  factory("Authentification", ['$q', '$window', 'Session', function() { }]).
  factory("AuthentificationInterceptor", ['$window', function() { }]);
*/
