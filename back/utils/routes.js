const express = require('express');
const products = require('../components/products/network');
const users = require('../components/users/network');
const categories = require('../components/categories/network');

const routes = (server)=>{
    server.use('/products',products);
    server.use('/users',users);
    server.use('/categories',categories);
}

module.exports = routes;
