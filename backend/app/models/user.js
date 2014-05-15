var Sequelize = require("sequelize");
var sequelize = require("./.");

module.exports = sequelize.define("User", {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});
