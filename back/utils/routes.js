const express = require('express');
const products = require('../components/products/network');
const users = require('../components/users/network');
const categories = require('../components/categories/network');
const shoppingCart = require('../components/cart/network');

const routes = (server)=>{
    server.use('/products',products);
    server.use('/users',users);
    server.use('/categories',categories);
    server.use('/cart',shoppingCart)
}

module.exports = routes;
