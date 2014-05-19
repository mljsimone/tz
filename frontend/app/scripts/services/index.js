"use strict";

module.exports = angular.module("tz.services", []).
  factory("User", ['$resource', require("./user_service")]).
  factory("TimeZone", ['$resource', require("./timezone_service")]);
