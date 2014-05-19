module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
};
