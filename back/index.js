const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.send('hola agustin')
})

app.listen(8080, () => {
    console.log('Im running in port 8080');
});