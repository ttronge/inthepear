const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    description: String,
    category:String,
})

const model = mongoose.model('Product', mySchema)

module.exports = model