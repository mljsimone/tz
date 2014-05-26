module.exports = function($scope, $timeout, $routeParams, Timezone) {
  var submit = $("#tef-submit");

  $scope.timezone = null;

  $scope.showEditSuccess = false;
  $scope.showEditFailed = false;
  $scope.showLoadingError = false;
  $scope.showSpinner = true;
  
  var options = {
    id: $routeParams.id
  };
  
  Timezone.get(options, function(timezone, responseHeaders) {
    $scope.showSpinner = false;
    $scope.timezone = timezone;
  }, function(httpResponse) {
    $scope.timezone = null;
    
    $scope.showSpinner = false;
    $scope.showLoadingError = true;
  });
  
  $scope.onSubmit = function() {
    submit.button("loading");

    new Timezone($scope.timezone).$update().
      then(function() {
        $scope.showEditSuccess = true;
        $timeout(function() { $scope.showEditSuccess = false; }, 3000);

      }).catch(function() {
        $scope.showEditFailed = true;
        $timeout(function() { $scope.showEditFailed = false; }, 3000);

      }).finally(function() {
        submit.button("reset");
      });

    
    //$scope.showEditSuccess = true;
    //$timeout(function() { $scope.showEditSuccess = false; }, 3000);
    
    //$scope.showEditFailed = true;
    //$timeout(function() { $scope.showEditFailed = false; }, 3000);
  }
}
