var express = require("express");
var tz = module.exports = express();

var models = require("./models");
var controllers = require("./controllers");

var server = tz.listen(3000, function() {
  console.log("Listening on %s:%d", server.address().address, server.address().port);
});
