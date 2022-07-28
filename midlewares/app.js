const express = require("express");
const app = express();
const userRouter = require("../routes/userRouter");

app.use("/api/v1/users", userRouter);

/// Global error handling

app.use(require("../controllers/errorController"));

module.exports = app;
