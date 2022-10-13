const express = require('express');
const router = express.Router();
const { addProduct, getProducts } = require('./controller');

router.get('/', (req, res) => {
    getProducts()
        .then((pr) => res.status(200).send(pr))
})

router.post('/', (req, res) => {
    const { body } = req;
    addProduct(body)
    .then(a => res.status(201).send({status: 'created successfully.'}))
    .catch(er => res.status(500).send({status: 'There is an error , please try in another moment.'}))
})

module.exports = router