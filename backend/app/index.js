var express = require("express"),
  jwt = require('express-jwt'),
  bodyParser = require("body-parser"),
  liveReload = require("connect-livereload");

var tz = (module.exports = express());

var secret = 'secret sauce #40';

// JSON Web Token middleware for token based authentification.
tz.use(jwt({ secret: secret }));

// Add the livereload script to the html views.
tz.use(liveReload());

// Serve static files directly.
tz.use(express.static(__dirname + "/../public"));

// Populate request.params.
tz.use(bodyParser());

// Load models module.
var models = require("./models");

// Load controllers module.
var controllers = require("./controllers");

// Bind controllers methods to the REST api.
require("./routes");

models.sequelize.
  sync({ force: true }).
  success(function() {
    var User = models.User;
    
    User.
      create({ username: 'bob', password: '1111' }).
      success(function() { console.log("User bob was created."); }).
      error(function() { console.log("Unable to create user bob."); });
    
    User.
      create({ username: 'alice', password: '1111' }).
      success(function() { console.log("User alice was created."); }).
      error(function() { console.log("Unable to create user alice."); });
      
    var server = tz.listen(3000, function() {
      console.log("Listening on %s:%d", server.address().address, server.address().port);
    });
  }).
  error(function(error) {
    throw new Error("Sequelize's sync failed: ", error);
  });
