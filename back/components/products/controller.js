const store = require('./store');

const addProduct = product => {
    return new Promise((resolve, reject) => {
        if (Object.entries(product).length === 0) {
            reject('Invalid data to create a product');
            return false;
        };
        store.addProduct(product)
            .then((result) => resolve(result))
            .catch(e => reject('please send all fields'));
    });
};

const getProducts = () => {
    return Promise.resolve(store.getProducts());
};

const getProductSingle = (id) => {
    return new Promise(async (resolve, reject) => {
        store.getSingleProduct(id)
            .then(result => resolve(result))
            .catch(err => reject('DONT EXIST ID'));
    })
};

const editProduct = (id, newProduct) => {
    return new Promise(async (resolve, reject) => {
        if (Object.entries(newProduct).length === 0 || !id) {
            reject('invalid data, please send the changes for the product ');
            return false;
        }
        store.editProduct(id, newProduct)
            .then(result => resolve(result))
            .catch(e => reject('Not exist id'))
    });
};

const deleteProduct = id => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('invalid data, please send the changes for the product ');
            return false;
        }
        store.deleteProduct(id)
            .then(result => resolve(result))
            .catch(e => reject('dont exit id'));
    });
};


module.exports = {
    getProductSingle,
    addProduct,
    getProducts,
    editProduct,
    deleteProduct
};