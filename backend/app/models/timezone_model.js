var Sequelize = require("sequelize");
var sequelize = require("./.");

module.exports = sequelize.define("Timezone", {
  user_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  city: Sequelize.STRING,
  delta: Sequelize.INTEGER
});
