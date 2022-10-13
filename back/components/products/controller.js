const store = require('./store');

const addProduct = (product) => {
    // TODO: add validation
    return store.addProduct(product)
};

const getProducts = () => {
    return Promise.resolve(store.getProducts);
};

module.exports = {
    addProduct,
    getProducts,
};