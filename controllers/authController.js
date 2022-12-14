const { User, Basket } = require("../models/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AppError = require("../utility/AppError");
const catchError = require("../utility/catchError");
const Email = require("../utility/mail");
const catchErrorLitle = require("../utility/catchErrorLitle");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
};

exports.signup = catchError(async (req, res, next) => {
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
});

exports.signin = async (req, res, next) => {
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
  new Email(user, "http://localhost:8000").sendMessage(
    null,
    "You must verified account"
  );

  res.status(200).json({
    status: "success",
    token,
    user,
  });
};

exports.protect = catchError(async (req, res) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("You dont have enter to app", 403));
  }

  const tekshir = jwt.verify(token, process.env.JWT_SECRET);

  if (!tekshir) {
    return next(new AppError("You must login", 403));
  }

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return next(new AppError("You must register", 403));
  }

  req.user = user;
  next();
});
