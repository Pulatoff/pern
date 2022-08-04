const { Brand } = require("../models/models");
const handler = require("./handler");

exports.getAllBrands = (req, res, next) => {
  handler.getAll(req, res, next, Brand);
};

exports.getOneBrand = (req, res, next) => {
  handler.getOne(req, res, next, Brand);
};

exports.addBrand = (req, res, next) => {
  handler.add(req, res, next, Brand);
};

exports.updateBrand = (req, res, next) => {
  handler.update(req, res, next, Brand);
};

exports.deleteBrand = (req, res, next) => {
  handler.delete(req, res, next, Brand);
};
