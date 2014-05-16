var express = require("express");
var bodyParser = require("body-parser");
var serveStatic = require("serve-static");

var tz = express();
module.exports = tz;

tz.use(bodyParser());
tz.use(serveStatic(__dirname + "/../public"));

var models = require("./models");
var controllers = require("./controllers");

var server = tz.listen(3000, function() {
  console.log("Listening on %s:%d", server.address().address, server.address().port);
});
