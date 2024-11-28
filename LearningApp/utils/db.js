const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("learning_app", "root", "1812", {
  dialect: "mysql",
  host: "localhost",
});

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database !");
  } catch (error) {
    console.log("Unable to connect to database : ", error);
  }
};

checkDbConnection();

module.exports = sequelize;
