const express = require('express');
const router = express.Router();
const { addUser, getUser, getUseringle, editUser, deleteUser } = require('./controller');
 
router.get('/:id', (req, res) => {
    const { params: { id } } = req;
    getUseringle(id)
        .then((pr) => res.status(200).send(pr))
        .catch(err => res.status(404).send({err}));
})
 
router.get('/', (req, res) => {
    getUser()
        .then((pr) => res.status(200).send(pr));
})
 
router.post('/', (req, res) => {
    const { body } = req;
    addUser(body)
        .then(a => res.status(201).send({ status: 'created successfully.' }))
        .catch(er => res.status(500).send({ status: er }));
});
 
router.put('/:id', (req, res) => {
    const { params: { id }, body } = req;
    editUser(id, body)
        .then(a => res.status(201).send({ status: 'edited successfully.' }))
        .catch(er => {
            res.status(500).send({ status: er });
        });
});
 
router.delete('/:id', (req, res) => {
    const { params: { id } } = req;
    deleteUser(id)
        .then(a => res.status(201).send({ status: 'deleted successfully.' }))
        .catch(er => res.status(500).send({ status: er }));
});
 
 
module.exports = router
