const AppError = require("./AppError");

module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((error) =>
      next(new AppError(error.message, 404))
    );
  };
};
