const catchError = require("../utility/catchError");
const { User } = require("../models/models");

exports.getAllUsers = catchError(async (req, res, next) => {
  const user = await User.findAll();
  res.status(200).json({
    status: "success",
    user,
  });
});
