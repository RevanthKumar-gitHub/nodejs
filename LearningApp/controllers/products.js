const ProductModel = require("../models/Product");
exports.getProducts = (req, res, next) => {
  const products = ProductModel.fetchAll();
  res.status(200).json({
    success: true,
    products: products,
  });
};

exports.addProducts = (req, res, next) => {
  const products = new ProductModel(req.body.title).save();
  res.status(201).json({
    success: true,
    message: "product added",
    products: products,
  });
};
