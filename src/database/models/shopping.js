const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shopping', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    gogers_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gogers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'shopping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "users_id" },
          { name: "gogers_id" },
        ]
      },
      {
        name: "fk_shopping_users1_idx",
        using: "BTREE",
        fields: [
          { name: "users_id" },
        ]
      },
      {
        name: "fk_shopping_gogers1_idx",
        using: "BTREE",
        fields: [
          { name: "gogers_id" },
        ]
      },
    ]
  });
};
