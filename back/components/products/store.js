const Model = require('./model');
const Cateories = require('../categories/model')

const addProduct = (newProduct) => {
    const { category } = newProduct
    const categoriaId = Cateories.findById({ _id: category })

    const product = new Model(newProduct);
    return product.save();
};

const getProducts = () => {
    return new Promise((resolve, reject) => {
        const productos = Model.find({})
        .populate('category')
        .exec((err,populated)=>{
            if(err){
                reject(err)
                return false
            }
            resolve(populated)
        })
    })
};

const getSingleProduct = singleId => {
    return Model.findById(singleId);
};

const editProduct = async (id, newProduct) => {
    const foundedProduct = await Model.findById({ _id: id })
    foundedProduct.name = newProduct.name
    foundedProduct.price = newProduct.price
    foundedProduct.stock = newProduct.stock
    foundedProduct.description = newProduct.description
    foundedProduct.category = newProduct.category
    foundedProduct.image = newProduct.image

    const productEdidited = await foundedProduct.save();
    return productEdidited;
};

const deleteProduct = async id => {
    return Model.deleteOne({
        _id: id
    });
};

module.exports = {
    addProduct,
    getProducts,
    getSingleProduct,
    editProduct,
    deleteProduct,
};