"use strict";

module.exports = angular.module("tz.services", []).
  factory("User", ['$resource', require("./user_service")]).
  factory("Session", ['$resource', require("./session_service")]).
  factory("TimeZone", ['$resource', require("./timezone_service")]).
  factory("authentificationInterceptor", ['$q', '$window', require("./authentification-interceptor_service")]);
