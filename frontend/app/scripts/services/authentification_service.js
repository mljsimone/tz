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
      return JSON.parse(sessionStorage.session || null);
    },

    getUser: function() {
      var session = JSON.parse(sessionStorage.session || null);

      return session.user || null;
    },

    getToken: function() {
      return $window.sessionStorage.session_token;
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
