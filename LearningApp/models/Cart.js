const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = Cart;
