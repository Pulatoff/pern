const { User, Basket } = require("../models/models");
const jwt = require("jsonwebtoken");
const AppError = require("../utility/AppError");

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
