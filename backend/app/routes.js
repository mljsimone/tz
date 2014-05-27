var app = require("./."),
    jwt = require("express-jwt"),
    config = require("./config");
    controllers = require("./controllers");

var users = controllers.users,
    sessions = controllers.sessions,
    timezones = controllers.timezones;

var authenticated = jwt({ secret: config.secret });

app.
  post(   "/api/v1/users",      users.create).
  delete( "/api/v1/users/:id", authenticated, users.destroy).
  get(    "/api/v1/users",     authenticated, users.findAll).
  get(    "/api/v1/users/:id", authenticated, users.findOne).
  put(    "/api/v1/users/:id", authenticated, users.update).
  
  post(   "/api/v1/sessions",     sessions.create).
  delete( "/api/v1/sessions/:id", authenticated, sessions.destroy).
  get(    "/api/v1/sessions",     authenticated, sessions.findAll).
  get(    "/api/v1/sessions/:id", authenticated, sessions.findOne).
  put(    "/api/v1/sessions/:id", authenticated, sessions.update).
  
  post(   "/api/v1/timezones",     authenticated, timezones.create).
  delete( "/api/v1/timezones/:id", authenticated, timezones.destroy).
  get(    "/api/v1/timezones",     authenticated, timezones.findAll).
  get(    "/api/v1/timezones/:id", authenticated, timezones.findOne).
  put(    "/api/v1/timezones/:id", authenticated, timezones.update);
