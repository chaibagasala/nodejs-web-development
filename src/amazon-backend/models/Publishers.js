module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publishers', {
    publisherId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        isEmail: {msg: "invalid-email"}
      }
    },
    website: {
      type: DataTypes.STRING(2048),
      allowNull: false,
      validate: {
        isUrl: {msg: "invalid-url"}
      }
    },
  }, {
    tableName: 'publishers',
  });
};
