module.exports = function($q, $window, Session) {
  return {
    signIn: function(credentials) {
      var promise = new Session(credentials).$save();
      
      promise.then(function(data) {
        $window.sessionStorage.session = JSON.stringify({
          user: data.user, token: data.token });
      }).catch(function() {
        delete $window.sessionStorage.session;
      });
      
      return promise;
    },
    
    signOut: function() {
      var deferred = $q.defer();

      delete $window.sessionStorage.session;
      deferred.resolve();
      
      return deferred.promise;
    },

    isSignedIn: function() {
      return !!$window.sessionStorage.session;
    },

    getSession: function() {
      var session = $window.sessionStorage.session;

      if (session)
        return JSON.parse(session);

      return null;
    },

    getUser: function() {
      var session =  $window.sessionStorage.session;

      if (session)
        return JSON.parse(session).user;
      
      return null;
    },

    getToken: function() {
      var session =  $window.sessionStorage.session;

      if (session)
        return JSON.parse(session).token;
      
      return null;
    },

    events: {
      signInSuccess:    "asis",
      signInFailed:     "asif",
      signInError:      "asie",
      signOutSuccess:   "asos",
      signOutFailed:    "asof",
      sessionTimeout:   "ast",
      notAuthenticated: "ana"
    }
  };
};
