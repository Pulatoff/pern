const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "postgres", host: process.env.DB_HOST }
);

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB succesfully");
  } catch (e) {
    console.log(`DB connection error: ${e.message}`);
  }
};
