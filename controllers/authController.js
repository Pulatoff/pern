const { User } = require("../models/models");

exports.signup = async (req, res, next) => {
  const { password, email } = req.body;
  const user = await User.create();
};
