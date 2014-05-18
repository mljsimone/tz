"use strict";

module.exports = function() {
  return {
    restrict: 'A',
    require: "ngModel",
    link: function(scope, element, attributes, controller) {
      var selector = attributes.ngEqual;
      
      element.add(selector).on("keyup", function() {
        scope.$apply(function() {
          controller.$setValidity('equal', element.val() == $(selector).val());
        });
      });
    }
  };
};
