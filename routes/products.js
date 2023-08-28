const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/products');

router.get('/products', getProducts);

router.post('/createproduct', createProduct);


module.exports = router;