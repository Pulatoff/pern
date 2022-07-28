const sequelize = require("./db");

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB succesfully");
  } catch (e) {
    console.log(`DB connection error: ${e.message}`);
  }
};
