require("dotenv").config();
const app = require("./midlewares/app");
const db = require("./configs/db");
const PORT = process.env.PORT || 2005;

db();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
