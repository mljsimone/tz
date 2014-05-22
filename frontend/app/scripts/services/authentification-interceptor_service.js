module.exports = function($q, $window) {
  return {
    request: function(request) {
      request.headers = request.headers || {};
      
      if ($window.sessionStorage.token)
        request.headers.Authorization = "Bearer " + $window.sessionStorage.token;

      return request;
    },
    response: function(response) {

      if (response.status == 401) {
        // the user isn't authenticated.
        // Should be send him to /signin ??
      }
      
      return response || $q.when(response);
    }
  };
};
