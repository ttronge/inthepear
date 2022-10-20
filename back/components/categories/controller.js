const store = require('./store');

const addCategories = category => {
    return new Promise((resolve, reject) => {
        if (Object.entries(category).length === 0) {
            reject('Invalid data to create a Categories');
            return false;
        };
        store.addCategories(category)
            .then((result) => resolve(result))
            .catch(e => reject('please send all fields'));
    });
};

const getCategories = () => {
    return Promise.resolve(store.getCategories());
};

const getSingleCategories = id => {
    return new Promise(async (resolve, reject) => {
        store.getSingleCategory(id)
            .then(result => resolve(result))
            .catch(err => reject('DONT EXIST ID'));
    })
};

const editCategories = (id, category) => {
    return new Promise(async (resolve, reject) => {
        if (Object.entries(category).length === 0 || !id) {
            reject('invalid data, please send the changes for the categorie ');
            return false;
        }
        store.editCategorie(id, category)
            .then(result => resolve(result))
            .catch(e => reject('Not exist id'));
    });
};

const deleteCategories = id => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('invalid data, please send the changes for the categorie ');
            return false;
        }
        store.deleteCategory(id)
            .then(result => resolve(result))
            .catch(e => reject('dont exit id'));
    });
};


module.exports = {
    getSingleCategories,
    addCategories,
    getCategories,
    editCategories,
    deleteCategories,
};
