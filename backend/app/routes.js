var app = require("./."),
    controllers = require("./controllers");

var users = controllers.users,
    sessions = controllers.sessions,
    timezones = controllers.timezones;

// Do not repeat the url prefix.
function _(suffix) {
  return "/api/v1" + suffix;
}

app.
  post(   _("/users"),      users.create).
  delete( _("/users/:id"),  users.destroy).
  get(    _("/users"),      users.findAll).
  get(    _("/users/:id?"), users.findOne).
  put(    _("/users/:id"),  users.update).

  post(   _("/sessions"),      sessions.create).
  delete( _("/sessions/:id"),  sessions.destroy).
  get(    _("/sessions"),      sessions.findAll).
  get(    _("/sessions/:id?"), sessions.findOne).
  put(    _("/sessions/:id"),  sessions.update).

  post(   _("/timezones"),      timezones.create).
  delete( _("/timezones/:id"),  timezones.destroy).
  get(    _("/timezones"),      timezones.findAll).
  get(    _("/timezones/:id?"), timezones.findOne).
  put(    _("/timezones/:id"),  timezones.update);
