const { Product, ProductInfo } = require("../models/models");
const handler = require("./handler");
const { v4 } = require("uuid");

exports.getAllProducts = (req, res, next) => {
  handler.getAll(req, res, next, Product);
};

exports.getOneProducts = (req, res, next) => {
  handler.getOne(req, res, next, Product);
};

exports.addProduct = async (req, res, next) => {
  const { name, info, price, brandId, categoryId } = req.body;
  const product = await Product.create({
    name,
    price,
    brandId,
    categoryId,
    img,
  });
  if (info) {
    const productInfo = await ProductInfo.create({
      title: info.title,
      description: info.description,
      productId: product.id,
    });
  }
  res.status(201).json({
    product,
  });
};

exports.updateProduct = (req, res, next) => {};
