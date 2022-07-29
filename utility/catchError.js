const AppError = require("./AppError");

module.exports = (funksiya) => {
  return (req, res, next, Model) => {
    funksiya(req, res, next, Model).catch((err) =>
      next(new AppError(err.message, 404))
    );
  };
};
