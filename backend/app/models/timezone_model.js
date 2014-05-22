module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Timezone", {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    delta: DataTypes.INTEGER
  });
};
