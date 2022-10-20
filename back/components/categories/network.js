const express = require('express');
const router = express.Router();
const { addCategories, getSingleCategories, editCategories, deleteCategories,getCategories } = require('./controller');

router.get('/:id', (req, res) => {
    const { params: { id } } = req;
    getSingleCategories(id)
        .then((pr) => res.status(200).send(pr))
        .catch(err => res.status(404).send({ err }));
})

router.get('/', (req, res) => {
    getCategories()
        .then((pr) => res.status(200).send(pr));
})

router.post('/', (req, res) => {
    const { body } = req;
    addCategories(body)
        .then(a => res.status(201).send({ status: 'created successfully.' }))
        .catch(er => res.status(500).send({ status: er }));
});

router.put('/:id', (req, res) => {
    const { params: { id }, body } = req;
    editCategories(id, body)
        .then(a => res.status(201).send({ status: 'edited successfully.' }))
        .catch(er => {
            res.status(500).send({ status: er });
        });
});

router.delete('/:id', (req, res) => {
    const { params: { id } } = req;
    deleteCategories(id)
        .then(a => res.status(201).send({ status: 'deleted successfully.' }))
        .catch(er => res.status(500).send({ status: er }));
});


module.exports = router