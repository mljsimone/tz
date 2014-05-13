var tz = require("express")();

tz.get("/", function(req, res) {
  res.send("hello world");
});

var server = tz.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
