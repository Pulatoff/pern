module.exports = (funksiya) => {
  return (req, res, next) => {
    funksiya(req, res, next);
  };
};
