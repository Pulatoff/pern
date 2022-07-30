const { Category } = require("../models/models");
const handler = require("./handler");

exports.getAllCategory = (req, res, next) => {
  handler.getAll(req, res, next, Category);
};

exports.getOneCategory = (req, res, next) => {
  handler.getOne(req, res, next, Category);
};

exports.addCategory = (req, res, next) => {
  handler.add(req, res, next, Category);
};

exports.updateCategory = (req, res, next) => {
  handler.update(req, res, next, Category);
};

exports.deleteCategory = (req, res, next) => {
  handler.delete(req, res, next, Category);
};
