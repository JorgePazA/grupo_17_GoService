let DataTypes = require("sequelize").DataTypes;
let _categories = require("./categories");
let _gogers = require("./gogers");
let _shopping = require("./shopping");
let _users = require("./users");

function initModels(sequelize) {
  let categories = _categories(sequelize, DataTypes);
  let gogers = _gogers(sequelize, DataTypes);
  let shopping = _shopping(sequelize, DataTypes);
  let users = _users(sequelize, DataTypes);

  gogers.belongsToMany(users, { as: 'users_id_users', through: shopping, foreignKey: "gogers_id", otherKey: "users_id" });
  users.belongsToMany(gogers, { as: 'gogers_id_gogers', through: shopping, foreignKey: "users_id", otherKey: "gogers_id" });
  gogers.belongsTo(categories, { as: "category", foreignKey: "categories_id"});
  categories.hasMany(gogers, { as: "gogers", foreignKey: "categories_id"});
  shopping.belongsTo(gogers, { as: "goger", foreignKey: "gogers_id"});
  gogers.hasMany(shopping, { as: "shoppings", foreignKey: "gogers_id"});
  shopping.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(shopping, { as: "shoppings", foreignKey: "users_id"});

  return {
    categories,
    gogers,
    shopping,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
