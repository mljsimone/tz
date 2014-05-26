var moment = require("moment");

module.exports = function($scope, $routeParams, $timeout, $location, Timezone) {
  $scope.timezones = null;
  $scope.showSpinner = true;
  $scope.showLoadingError = false;
  $scope.searchQuery = $routeParams.q || null;
  $scope.showDeleteError = false;

  $scope.pagination = {
    itemsPerPage: 3,
    currentPage: parseInt($routeParams.page || 1),
    totalItems: 0,
    totalPages: 0
  };
  
  $scope.onSearch = function() {
    if ($scope.searchQuery == "")
      $scope.searchQuery = null;

    $location.search("q", $scope.searchQuery);
    $scope.loadItems();
  };

  $scope.onSearchClear = function() {
    $scope.searchQuery = null;
    $scope.onSearch();
  };

  $scope.onDelete = function(id, button) {
    var row = $("#timezone-" + id);

    $(button).button("loading");

    Timezone.delete({id: id}, function() {
      $scope.showDeleteError = false;
      $(button).button("reset");
      row.hide();
    }, function() {
      $(button).button("reset");
      
      $scope.showDeleteError = true;
      $timeout(function() { $scope.showDeleteError = false; }, 6000);
    });
  }

  $scope.buildUrl = function(page) {
    var qs = $location.search();
    
    if (qs.q)
      return "#!/timezones/" + page + "?q=" + qs.q;

    return "#!/timezones/" + page;
  }

  $scope.loadItems = function() {
    // convert page to 0 based indexing.
    var page = $scope.pagination.currentPage - 1; 
    
    // Lets display this many items.
    var limit = $scope.pagination.itemsPerPage;
    
    var offset = page * limit;

    // set the options for the query.
    var options = { offset: offset, limit: limit, filter: $scope.searchQuery };
    
    Timezone.query(options, function(timezones, responseHeaders) {

      var headers = responseHeaders();
      
      $scope.pagination.totalItems = parseInt(headers["x-pagination-total"] || 0);
      $scope.pagination.totalPages = Math.ceil($scope.pagination.totalItems / $scope.pagination.itemsPerPage);

      $scope.showSpinner = false;
      
      for (var i = 0; i < timezones.length; i++) {
        timezones[i].time = moment().zone(timezones[i].delta).format("h:mm:ss a");
      }
      
      if (timezones.length == 0)
        $scope.showEmptyError = true;

      $scope.timezones = timezones;
    
    }, function(httpResponse) {
      $scope.showLoadingError = true;
    });
  };
  
  $scope.loadItems();
}
