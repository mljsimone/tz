var Sequelize = require("sequelize");
var sequelize = new Sequelize("sqlite:///timezones-dev");

module.exports = {
  sequelize: sequelize,
  User: sequelize.import("./user_model"),
  Timezone: sequelize.import("./timezone_model")
};
