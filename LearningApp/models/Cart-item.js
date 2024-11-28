const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const CartItem = sequelize.define("CartItem", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
});


module.exports = CartItem;