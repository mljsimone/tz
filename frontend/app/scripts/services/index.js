"use strict";

module.exports = angular.module("tz.services", []).
  factory("User", ['$resource', require("./user_service")]).
  factory("Session", ['$resource', require("./session_service")]).
  factory("Timezone", ['$resource', require("./timezone_service")]).
  factory("Authentification", ['$q', '$window', 'Session', require("./authentification_service")]).
  factory("AuthentificationInterceptor", ['$q', '$window', require("./authentification-interceptor_service")]);
