module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Timezone", {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    delta: DataTypes.INTEGER
  });
};
