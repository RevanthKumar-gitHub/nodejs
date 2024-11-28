const CartModel = require("../models/Cart");
const Product = require("../models/Product");

exports.addToCart = async (req, res, next) => {
  const productId = req.params.id;
  const cart = await req.user.getCart();
  let newCart;
  let products = await cart.getProducts({
    where: {
      id: productId,
    },
  });
  if (products.length > 0) {
    const product = products[0];
    const oldQuantity = product.CartItem.quantity;
    const newQuantity = oldQuantity + 1;
    newCart = await cart.addProduct(product, {
      through: { quantity: newQuantity },
    });
  } else {
    const product = await Product.findByPk(productId);
    console.log(product);
    newCart = await cart.addProduct(product, { through: { quantity: 1 } });
  }
  res.status(201).json({
    status: true,
    cart: newCart,
  });
};

exports.getCart = async (req, res, next) => {
  const userCart = await req.user.getCart();
  const cart = await userCart.getProducts();
  res.status(200).json({
    status: true,
    cart: cart,
  });
};

exports.deleteCartItem = async (req, res, next) => {
  const cart = await req.user.getCart();
  const products = await cart.getProducts({
    where: {
      id: req.params.id,
    },
  });
  if(products.length>0)
  {
    const product = products[0];
    await product.CartItem.destroy();
  }
  res.status(200).json({
    status: true,
    msg : "deleted"
  });
};
