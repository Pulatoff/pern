const { User, Basket } = require("../models/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AppError = require("../utility/AppError");
const catchError = require("../utility/catchError");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
};

exports.signup = async (req, res, next) => {
  const { password, email, role } = req.body;
  if (!email || !password) {
    return next(new AppError("Invalid email or password", 403));
  }
  const user = await User.findOne({ where: { email } });
  if (user) {
    return next(
      new AppError("Already has email. Please enter other email or login", 403)
    );
  }
  const newUser = await User.create({ email, password, role });
  const basket = await User.create({ userId: newUser.id });
  const token = createToken(newUser.id);
  res.status(203).json({
    token,
    user: newUser,
  });
};

exports.signin = catchError(async (req, res, next) => {
  const { password, email } = req.body;

  // check enter password
  if (!email || !password) {
    return next(new AppError("Please enter email or password", 401));
  }

  //
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return next(new AppError("Not found user, please try again"));
  }

  if (password !== user.password) {
    return next(new AppError("Your password or email not correct", 403));
  }

  const token = createToken(user.id);

  res.status(200).json({
    status: "success",
    token,
    user,
  });
});
