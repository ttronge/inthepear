const store = require('./store');

const addShoppingCart = ShoppingCart => {
    return new Promise((resolve, reject) => {
        if (Object.entries(ShoppingCart).length === 0) {
            reject('Invalid data to create a ShoppingCart');
            return false;
        };
        store.addShoppingCart(ShoppingCart)
            .then((result) => resolve(result))
            .catch(e => reject('please send all fields'));
    });
};

const getShoppingCarts = () => {
    return Promise.resolve(store.getShoppingCarts());
};

const getShoppingCartSingle = (id) => {
    return new Promise(async (resolve, reject) => {
        store.getSingleShoppingCart(id)
            .then(result => resolve(result))
            .catch(err => reject('DONT EXIST ID'));
    })
};

const editShoppingCart = (id, newShoppingCart) => {
    return new Promise(async (resolve, reject) => {
        if (Object.entries(newShoppingCart).length === 0 || !id) {
            reject('invalid data, please send the changes for the ShoppingCart ');
            return false;
        }
        store.editShoppingCart(id, newShoppingCart)
            .then(result => resolve(result))
            .catch(e => reject('Not exist id'))
    });
};

const deleteShoppingCart = id => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('invalid data, please send the changes for the ShoppingCart ');
            return false;
        }
        store.deleteShoppingCart(id)
            .then(result => resolve(result))
            .catch(e => reject('dont exit id'));
    });
};


module.exports = {
    getShoppingCartSingle,
    addShoppingCart,
    getShoppingCarts,
    editShoppingCart,
    deleteShoppingCart
};