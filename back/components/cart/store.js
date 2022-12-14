const Model = require('./model.js');

const addShoppingCart = (newShoppingCart) => {
    const ShoppingCart = new Model(newShoppingCart);
    return ShoppingCart.save();
};

const getShoppingCarts = () => {
    return Model.find({});
};

const getSingleShoppingCart = singleId => {
    return Model.findById(singleId);
};

const editShoppingCart = async (id, newShoppingCart) => {
    const foundedShoppingCart = await Model.findById({_id:id})
    foundedShoppingCart.productId = newShoppingCart.productId
    foundedShoppingCart.quantity = newShoppingCart.quantity
    foundedShoppingCart.price = newShoppingCart.price
    foundedShoppingCart.total = newShoppingCart.total

    const ShoppingCartEdidited = await foundedShoppingCart.save();
    return ShoppingCartEdidited;
};

const deleteShoppingCart = async id =>{
    return Model.deleteOne({
        _id:id
    });
};

module.exports = {
    addShoppingCart,
    getShoppingCarts,
    getSingleShoppingCart,
    editShoppingCart,
    deleteShoppingCart,
};