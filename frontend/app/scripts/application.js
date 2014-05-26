"use strict";

// Needed by bootstrap's js stuff
window.jQuery = require("jquery"),
  window.$ = window.jQuery;

require("angular");
require("angular-route/angular-route");
require("angular-resource/angular-resource");
require("bootstrap/dist/js/bootstrap");

var app = angular.module("tz", [
  "ngRoute",
  "ngResource",
  require("./controllers").name,
  require("./directives").name,
  //require("./filters").name,
  require("./services").name
]);

app.config(["$routeProvider", "$locationProvider", "$httpProvider", function($routeProvider, $locationProvider, $httpProvider) {

  // Add the JWT token to every request the application makes. 
  $httpProvider.interceptors.push("AuthentificationInterceptor");
  
  // Tell the crawler that they are Ajax links.
  // https://developers.google.com/webmasters/ajax-crawling/docs/getting-started
  $locationProvider.hashPrefix("!");
  
  // Register the routes
  $routeProvider.
    when("/",          { controller: "HomeController",      templateUrl: "views/home.html" }).
    when("/signup",    { controller: "SignupController",    templateUrl: "views/signup.html" }).
    when("/signin",    { controller: "SigninController",    templateUrl: "views/signin.html" }).
    when("/signout",   { controller: "SignoutController",   template:    "" }).
    when("/timezones/add", { controller: "TimezonesAddController", templateUrl: "views/timezones-add.html" }).
    when("/timezones/:page?", { controller: "TimezonesController", templateUrl: "views/timezones.html", reloadOnSearch: true }).
    when("/timezones/:id/edit", { controller: "TimezonesEditController", templateUrl: "views/timezones-edit.html" }).
    otherwise({ redirectTo: "/" });
}]);
