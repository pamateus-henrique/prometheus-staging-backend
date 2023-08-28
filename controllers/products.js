const Product = require('../models/Product');
const {customControllerCounter} = require('../metrics/metrics');


const getProducts = async (req, res) => {
    const products = await Product.find();
    customControllerCounter.inc();
    res.status(200).json({products});
}

const createProduct = async (req,res) => {

    const product = req.body;
    if (!product.name || !product.price) {
        throw new BadRequestError('please provide all values');
    }
    
    const createdProduct = await Product.create(product);
    
    res.status(200).json({createdProduct});
}

module.exports = {getProducts, createProduct};

