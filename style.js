const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(require('stylus').middleware(__dirname + '/public'));


app.listen(process.argv[2]);


