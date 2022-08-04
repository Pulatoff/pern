const { Rating } = require("../models/models");
const handler = require("./handler");

exports.getAllReview = (req, res, next) => {
  handler.getAll(req, res, next, Rating);
};

exports.getOneReview = (req, res, next) => {
  handler.getOne(req, res, next, Rating);
};

exports.addReview = (req, res, next) => {
  handler.add(req, res, next, Rating);
};

exports.updateReview = (req, res, next) => {
  handler.update(req, res, next, Rating);
};

exports.deleteReview = (req, res, next) => {
  handler(req, res, next, Rating);
};
