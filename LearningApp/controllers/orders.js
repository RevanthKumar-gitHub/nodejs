const Product = require("../models/Product");

exports.createOrder = async (req, res, next) => {
  const cart = await req.user.getCart();
  const products = await cart.getProducts();

  if (products.length > 0) {
    const order = await req.user.createOrder();
    await order.addProducts(
      products.map((product) => {
        product.orderItem = { quantity: product.CartItem.quantity };
        return product;
      })
    );
    await cart.setProducts(null);
  }

  res.status(201).json({
    success: true,
    msg: "ordered",
  });
};

exports.getOrders = async (req, res, next) => {
  try {
    const orders = await req.user.getOrders({
      include: ["Products"],
    });

    res.status(200).json({
      success: true,
      orders: orders,
    });
  } catch (error) {
    next(error);
  }
};
