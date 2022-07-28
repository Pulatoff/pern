class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = this.statusCode === 404 ? "fail" : "error";
  }
}

module.exports = AppError;
