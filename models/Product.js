const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'name is required'],
        minlenght: 3,
        maxlenght: 50
    },
    price:{
        type: Number,
        required: [true, 'price is required']
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model('Product', ProductSchema);