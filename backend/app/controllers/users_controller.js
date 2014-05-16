var tz = require("..");
var User = require("../models/user_model");

// create
tz.post("/api/v1/users", function(req, res) {
  console.log("An user wants to register with this data: ");
  console.log(req.body);
  
  res.send(200);
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
