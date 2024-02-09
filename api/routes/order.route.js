const router = require('express').Router();
const { createOrder, getAllOrder } = require('../controller/order.controller');
const { verifyToken } = require('../middleware/jwt');

router.post('/:id', verifyToken, createOrder);
router.get('/', verifyToken, getAllOrder);

module.exports = router;