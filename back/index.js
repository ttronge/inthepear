const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db')
const routes = require('./utils/routes')
db('mongodb+srv://inthepeartomagus:maslarey@inthepeartomagus.dnqz7tc.mongodb.net/?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
routes(app);
app.listen(8080, () => {
    console.log('Im running in port 8080');
});
