var Sequelize = require("sequelize");
var sequelize = new Sequelize("sqlite:///timezones-dev");

module.exports = {
  sequelize: sequelize,
  User: sequelize.import("./user_model"),
  TimeZone: sequelize.import("./timezone_model")
};
