var Sequelize = require("sequelize");
var sequelize = require("./.");

module.exports = sequelize.define("User", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});
