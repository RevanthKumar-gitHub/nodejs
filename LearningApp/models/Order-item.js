const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const OrderItem = sequelize.define("orderItem", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
});

module.exports = OrderItem;
