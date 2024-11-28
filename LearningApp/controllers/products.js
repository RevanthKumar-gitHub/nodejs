const Product = require("../models/Product");
exports.getProducts = async (req, res, next) => {
  let products = await req.user.getProducts();
  products = products.map((product) => product.toJSON());
  res.status(200).json({
    success: true,
    products: products,
  });
};

exports.addProducts = async (req, res, next) => {
  const product = {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    price: req.body.price,
  };
  const addedProduct = await req.user.createProduct(product);

  res.status(201).json({
    success: true,
    product: addedProduct.toJSON(),
  });
};

exports.getProduct = async (req, res, next) => {
  const product = await Product.findByPk(req.params.id);
  res.status(200).json({
    status: true,
    product: product,
  });
};

exports.updateProduct = async (req, res, next) => {
  const newProduct = {
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    price: req.body.price,
  };
  await Product.update(newProduct, {
    where: {
      id: req.params.id,
    },
    returning: true,
  });
  res.status(200).json({
    success: true,
    message: "product updated",
  });
};

exports.deleteProduct = async (req, res, next) => {
  await Product.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    success: true,
    message: "product deleted",
  });
};
