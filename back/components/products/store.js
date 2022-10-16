const Model = require('./model');

const addProduct = (newProduct) => {
    const product = new Model(newProduct);
    return product.save()
};

const getProducts = () => {
    return Model.find({})
}

const getSingleProduct = singleId => {
    return Model.findById(singleId)
}

const editProduct = async (id, newProduct) => {
    const foundedProduct = await Model.findById({_id:id})
    foundedProduct.name = newProduct.name
    foundedProduct.price = newProduct.price
    foundedProduct.stock = newProduct.stock
    foundedProduct.description = newProduct.description
    foundedProduct.category = newProduct.category
    foundedProduct.image = newProduct.image
    const productEdidited = await foundedProduct.save()
    return productEdidited

}

module.exports = {
    addProduct,
    getProducts,
    getSingleProduct,
    editProduct,
};