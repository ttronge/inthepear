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

const editProduct = (id,newProduct) => {
   return Promise.resolve(store.editProduct(id,newProduct))
}

const deleteProduct = id =>{
    return Promise.resolve(store.deleteProduct(id))
}
module.exports = {
    getProductSingle,
    addProduct,
    getProducts,
    editProduct,
    deleteProduct
};