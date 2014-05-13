var tz = require("express")();

tz.get("/", function(req, res) {
  res.send("hello world");
});

// create
tz.post("/api/v1/users", function(req, res) {
  console.log("/api/v1/users");
  console.log(req.body);

  res.end("");
});



// Timezones

// list
tz.get("/api/v1/timezones", function(req, res) { });

// find
tz.get("/api/v1/timezones/:id", function(req, res) { });

// create
tz.post("/api/v1/timezones", function(req, res) { });

// update
tz.put("/api/v1/timezones/:id", function(req, res) { });

// partial update (?)
tz.patch("/api/v1/timezones/:id", function(req, res) { });

// delete
tz.delete("/api/v1/timezones/:id", function(req, res) { });

var server = tz.listen(3000, function() {
  console.log("Listening on port %d", server.address().port);
});
