const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db')

db('mongodb+srv://inthepeartomagus:maslarey@inthepeartomagus.dnqz7tc.mongodb.net/?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8080, () => {
    console.log('Im running in port 8080');
});
