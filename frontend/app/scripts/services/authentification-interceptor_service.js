module.exports = function($window) {
  return {
    request: function(config) {
      config.headers = config.headers || {};

      // Due to a bug in angular shitty DI, I can't use the Authentification here.
      //
      var session = $window.sessionStorage.session;

      if (session) {
        var token = JSON.parse(session).token;
        config.headers.Authorization = "Bearer " + token;
      }
      
      return config;
    }
  };
};
