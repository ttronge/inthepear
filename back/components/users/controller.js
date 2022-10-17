const store = require('./store');
 
const addUser = product => {
    return new Promise((resolve, reject) => {
        if (Object.entries(product).length === 0) {
            reject('Invalid data to create an user');
            return false;
        };
        store.adduser(product)
            .then((result) => resolve(result))
            .catch(e => reject('please send all fields'));
    });
};
 
const getUser = () => {
    return Promise.resolve(store.getusers());
};
 
const getUseringle = (id) => {
    return new Promise(async (resolve, reject) => {
        store.getSingleuser(id)
            .then(result => resolve(result))
            .catch(err => reject('DONT EXIST ID'));
    })
};
 
const editUser = (id, newProduct) => {
    return new Promise(async (resolve, reject) => {
        if (Object.entries(newProduct).length === 0 || !id) {
            reject('invalid data, please send the changes  the user ');
            return false;
        }
        store.edituser(id, newProduct)
            .then(result => resolve(result))
            .catch(e => reject('Not exist id'))
    });
};
 
const deleteUser = id => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('invalid data, please send the changes the user ');
            return false;
        }
        store.deleteuser(id)
            .then(result => resolve(result))
            .catch(e => reject('dont exit id'));
    });
};
 
 
module.exports = {
    getUseringle,
    addUser,
    getUser,
    editUser,
    deleteUser
};
