const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    total:{
        type:Number,
        required:true
    }
})

const model = mongoose.model('ShoppingCart', mySchema);

module.exports = model;
