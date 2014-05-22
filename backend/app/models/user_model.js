var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      set: function(value) {
        // Rainbow tables no more. =)
        var salt = bcrypt.genSaltSync(10);

        // Hash the password before storing it into the DB.
        var hash = bcrypt.hashSync(value, salt);
        
        // Overwrite the password with the hash we just generate.
        this.setDataValue("password", hash);
      } 
    }
  }, {
    instanceMethods: {
      verifyPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    }
  });
};
