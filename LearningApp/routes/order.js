const { createOrder, getOrders } = require('../controllers/orders');

const router = require('express').Router();

router.post('/createOrder',createOrder);
router.get('/orders',getOrders);

module.exports = router;