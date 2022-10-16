const express = require('express');
const router = express.Router();
const { addProduct, getProducts, getProductSingle } = require('./controller');

router.get('/:id', (req, res) => {
    const { params: { id } } = req
    getProductSingle(id)
        .then((pr) => res.status(200).send(pr))
})

router.get('/', (req, res) => {
    getProducts()
        .then((pr) => res.status(200).send(pr))
})

router.post('/', (req, res) => {
    const { body } = req;
    addProduct(body)
        .then(a => res.status(201).send({ status: 'created successfully.' }))
        .catch(er => res.status(500).send({ status: 'There is an error , please try in another moment.' }))
})

module.exports = router