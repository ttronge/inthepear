const Model = require('./model');

const addCategories = (newProduct) => {
    const product = new Model(newProduct);
    return product.save();
};

const getCategories = () => {
    return Model.find({});
};

const getSingleCategory = singleId => {
    return Model.findById(singleId);
};

const editCategorie = async (id, category) => {
    const foundedCategory = await Model.findById({_id:id})
    foundedCategory.name = category.name
    const categoryEdited = await foundedCategory.save();
    return categoryEdited;
};

const deleteCategory = async id =>{
    return Model.deleteOne({
        _id:id
    });
};

module.exports = {
    addCategories,
    getCategories,
    getSingleCategory,
    editCategorie,
    deleteCategory,
};