const Model = require('./model');
 
const adduser = (newuser) => {
    const user = new Model(newuser);
    return user.save();
};
 
const getusers = () => {
    return Model.find({});
};
 
const getSingleuser = singleId => {
    return Model.findById(singleId);
};
 
const edituser = async (id, newuser) => {
    const foundeduser = await Model.findById({_id:id})
    foundeduser.name = newuser.name
    foundeduser.price = newuser.price
    foundeduser.stock = newuser.stock
    foundeduser.description = newuser.description
    foundeduser.category = newuser.category
    foundeduser.image = newuser.image
 
    const userEdidited = await foundeduser.save();
    return userEdidited;
};
 
const deleteuser = async id =>{
    return Model.deleteOne({
        _id:id
    });
};
 
module.exports = {
    adduser,
    getusers,
    getSingleuser,
    edituser,
    deleteuser,
};
