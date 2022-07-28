const AppError = require("./AppError");

module.exports = (funksiya) => {
  return (req, res, next) => {
    funksiya(req, res, next).catch((err) =>
      next(new AppError(err.message, 404))
    );
  };
};
