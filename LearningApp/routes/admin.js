const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

router.get("/products",  productsController.getProducts);
router.post("/add-product", productsController.addProducts);
router.put("/updateProduct/:id", productsController.updateProduct);
router.delete("/deleteProduct/:id", productsController.deleteProduct);
router.get("/product/:id", productsController.getProduct);

module.exports = router;
