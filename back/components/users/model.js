const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
 
})
 
const model = mongoose.model('Users', mySchema)
 
module.exports = model
