const catchError = require("../utility/catchError");

const response = (res, data, status) => {
  res.status(status).json({
    data,
  });
};

exports.getAll = catchError(async (req, res, next, Model) => {
  const data = await Model.findAll();
  response(res, data, 200);
});

exports.getOne = catchError(async (req, res, next, Model) => {
  const data = await Model.findOne({ where: { id: +req.params.id } });
  response(res, data, 200);
});

exports.add = catchError(async (req, res, next, Model) => {
  const data = await Model.create(req.body);
  response(res, data, 201);
});

exports.update = catchError(async (req, res, next, Model) => {
  const data = await Model.update(req.body, { where: { id: +req.params.id } });
  response(res, data, 203);
});

exports.delete = catchError(async (req, res, next, Model) => {
  const data = await Model.destroy({ where: { id: +req.params.id } });
  response(res, data, 204);
});
