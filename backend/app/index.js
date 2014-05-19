var express = require("express");
var bodyParser = require("body-parser");

var tz = express();
module.exports = tz;

tz.use(bodyParser());
tz.use(express.static(__dirname + "/../public"));

tz.use(function(request, response, next) {
  response.header("Cache-Control", "no-cache, no-store, must-revalidate");
  response.header("Pragma", "no-cache");
  response.header("Expires", 0);
  next();
});

var models = require("./models");
var controllers = require("./controllers");

var users = controllers.users;
var timezones = controllers.timezones;

tz.
  post("/api/v1/users", users.create).
  delete("/api/v1/users/:id", users.destroy).
  get("/api/v1/users", users.findAll).
  get("/api/v1/users/:id?", users.findOne).
  put("/api/v1/users/:id", users.update);

tz.
  post("/api/v1/timezones", timezones.create).
  delete("/api/v1/timezones/:id", timezones.destroy).
  get("/api/v1/timezones", timezones.findAll).
  get("/api/v1/timezones/:id?", timezones.findOne).
  put("/api/v1/timezones/:id", timezones.update);

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
    throw new Error("Sequelize's sync failed: " + error);
  });
