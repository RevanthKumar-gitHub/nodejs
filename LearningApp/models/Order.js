const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  
});

module.exports = Order;
