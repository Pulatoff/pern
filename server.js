require("dotenv").config();
const app = require("./midlewares/app");
const db = require("./configs/connectToDb");
const sequelize = require("./configs/db");
const PORT = process.env.PORT || 2005;

sequelize.sync();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
