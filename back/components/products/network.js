const express = require('express');
const router = express.Router();
const { addProduct, getProducts, getProductSingle, editProduct, deleteProduct } = require('./controller');

router.get('/:id', (req, res) => {
    const { params: { id } } = req;
    getProductSingle(id)
        .then((pr) => res.status(200).send(pr))
        .catch(err => res.status(404).send({err}));
})

router.get('/', (req, res) => {
    getProducts()
        .then((pr) => res.status(200).send(pr));
})

router.post('/', (req, res) => {
    const { body } = req;
    addProduct(body)
        .then(a => res.status(201).send({ status: 'created successfully.' }))
        .catch(er => res.status(500).send({ status: er }));
});

router.put('/:id', (req, res) => {
    const { params: { id }, body } = req;
    editProduct(id, body)
        .then(a => res.status(201).send({ status: 'edited successfully.' }))
        .catch(er => {
            res.status(500).send({ status: er });
        });
});

router.delete('/:id', (req, res) => {
    const { params: { id } } = req;
    deleteProduct(id)
        .then(a => res.status(201).send({ status: 'deleted successfully.' }))
        .catch(er => res.status(500).send({ status: er }));
});


module.exports = router