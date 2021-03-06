const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
    return req.body.str.split('').reverse().join('');
});

app.listen(process.argv[2]);

console.log("Application started.");
