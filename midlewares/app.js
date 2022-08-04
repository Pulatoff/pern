const express = require("express");
const app = express();
const userRouter = require("../routes/userRouter");
const categoryRouter = require("../routes/categoryRouter");
const brandRouter = require("../routes/brandRouter");
const reviewRouter = require("../routes/reviewRouter");
const morgan = require("morgan");

// logging requests
app.use(morgan("dev"));

// parser to json
app.use(express.json());

// Main Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/brands", brandRouter);
app.use("/api/v1/review", reviewRouter);

/// Global error handling
app.use(require("../controllers/errorController"));

module.exports = app;
