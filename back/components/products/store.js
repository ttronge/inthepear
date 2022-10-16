const Model = require('./model');

const addProduct = (newProduct) => {
    console.log(newProduct);
    const product = new Model(newProduct);
    return product.save()
};

const getProducts = () => {
    return Model.find({})
}

module.exports = {
    addProduct,
    getProducts,
};