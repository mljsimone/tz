var express = require("express"),
  bodyParser = require("body-parser"),
  liveReload = require("connect-livereload");

var tz = (module.exports = express());

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

// Bind controllers methods to urls.
require("./routes");

models.sequelize.
  sync({ force: true }).
  success(function() {
    var User = models.User;
    var Timezone = models.Timezone;

    var u1 = {
      firstName: 'Mariano',
      lastName: 'Simone',
      email: 'mljsimone@gmail.com',
      password: '123'
    };
    
    var u2 = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@fucking.doe.com',
      password: 'abc'
    };

    var t1 = {
      userId: 1,
      name: "foo",
      city: "Kiev",
      delta: 5
    };
    
    var t2 = {
      userId: 1,
      name: "bar",
      city: "Buenos Aires",
      delta: 3
    };

    var t3 = {
      userId: 1,
      name: "faz",
      city: "Sao pablo",
      delta: 4
    };
    
    User.create(u1);
    User.create(u2);

    Timezone.create(t1);
    Timezone.create(t1);
    Timezone.create(t1);
    Timezone.create(t2);
    Timezone.create(t2);
    Timezone.create(t2);
    Timezone.create(t3);
    Timezone.create(t3);
    Timezone.create(t1);
    Timezone.create(t1);
    Timezone.create(t2);
    Timezone.create(t3);

    var server = tz.listen(3000, function() {
      console.log("Listening on %s:%d", server.address().address, server.address().port);
    });

  }).
  error(function(error) {
    throw new Error("Sequelize's sync failed: ", error);
  });
