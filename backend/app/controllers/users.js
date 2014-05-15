var tz = require("..");
var User = require("../models/user");

// create
tz.post("/api/v1/users/users", function(req, res) {
});

// destroy
tz.delete("/api/v1/users/:id", function(req, res) {
});

// find
tz.get("/api/v1/users/:id?", function(req, res) {
  User.find({ username: 'john' }).complete(function(err, user) {
    res.json(user);
  });
});

// update
tz.put("/api/v1/users/:id", function(req, res) {
});
