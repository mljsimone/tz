"use strict";

// Needed by bootstrap's js stuff
window.jQuery = require("jquery"),
  window.$ = window.jQuery;

require("angular");
require("angular-route/angular-route");
require("twitter-bootstrap-3.0.0/dist/js/bootstrap");

// Lets add the tracking code right here.
require("./analytics");

var app = angular.module("tz", [
  "ngRoute",
  require("./controllers").name,
  require("./directives").name,
  //require("./filters").name,
  //require("./services").name
]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  
  console.log("Configuring tz module");

  // Tell the crawler that they are Ajax links.
  // https://developers.google.com/webmasters/ajax-crawling/docs/getting-started
  $locationProvider.hashPrefix("!");
  
  // Register the routes
  $routeProvider
    .when("/",        { controller: "HomeController",   templateUrl: "views/home.html" })
    .when("/signup",  { controller: "SignupController", templateUrl: "views/signup.html" })
    .when("/signin",  { controller: "SigninController", templateUrl: "views/signin.html" })
    .when("/signout", { controller: "LogoutController", template: "" })
    .otherwise({ redirectTo: "/" });
}]);
















