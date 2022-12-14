module.exports = (err, req, res, next) => {
  err.status = err.status || "fail";
  err.statusCode = err.statusCode || 404;
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};
