const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');

router.post('/addToCart/:id',cartController.addToCart);
router.get('/cart',cartController.getCart);
router.delete('/deleteCartItem/:id',cartController.deleteCartItem);


module.exports = router;