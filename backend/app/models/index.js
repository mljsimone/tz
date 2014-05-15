var Sequelize = require("sequelize");

var sequelize = new Sequelize(
  "timezones-dev",
  "username",
  "password",
  {
    dialect: 'sqlite'
  }
);

module.exports = sequelize;

require("./user");

sequelize.sync({ force: true }).complete(function(err) {
  
  if (!!err)
    throw new Error("Sequelize's sync failed: " + err);

  var User = require("./user");
  
  User.create({ id: 1, username: 'john', password: '1111' }).complete(function(err, user1) {
    console.log("Sample user john was created.");
  });
});
