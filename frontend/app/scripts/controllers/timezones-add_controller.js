module.exports = function($scope, $timeout, Timezone) {
  var submit = $("#taf-submit");

  $scope.showSaveSuccess = false;
  $scope.showSaveFailed = false;

  $scope.onSubmit = function() {
    submit.button("loading");
    
    new Timezone($scope.timezone).$save().
      then(function() {
        $scope.showSaveSuccess = true;
        
        $timeout(function() {
          $scope.showSaveSuccess = false;
        }, 3000);

      }).catch(function() {
        $scope.showSaveFailed = true;
        
        $timeout(function() {
          $scope.showSaveFailed = false;
        }, 3000);

      }).finally(function() {
        submit.button("reset");
      });
  };
}
