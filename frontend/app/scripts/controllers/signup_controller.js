"use strict";

module.exports = function($scope, $location, User) {
  var submit = $("#sf-submit");
  var signupComplete = $("#sf-complete-modal");
  var signupError = $("#sf-error-modal");
  
  $scope.user = {
    firstName: "Mariano",
    lastName: "Simone",
    email: "mljsimone@gmail.com",
    password: "rollercoster$",
    password2: "rollercoster$"
  };
  
  $scope.onSubmit = function() {
    submit.button("loading");
    
    new User($scope.user).
      $save().
      then(function() {
        signupComplete.modal("show");
      }).
      catch(function() {
        signupError.modal("show");
      }).
      finally(function() {
        submit.button("reset");
      });
  };

  // Remove Bootstrap's modal blur.
  $scope.$on("$locationChangeStart", function(next, current) {
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
  });
};
