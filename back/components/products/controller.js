const store = require('./store');

const addProduct = (product) => {
    // TODO: add validation
    return store.addProduct(product)
};

const getProducts = () => {
    return Promise.resolve(store.getProducts());
};

const getProductSingle = (id) => {
    return Promise.resolve(store.getSingleProduct(id));
};

module.exports = {
    getProductSingle,
    addProduct,
    getProducts,
};