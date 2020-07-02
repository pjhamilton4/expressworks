const express = require('express');
const fs = require('fs');

const app = express();
const file = process.argv[3];

app.get('/books', (req, res) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            return res.sendStatus(500);
        }
        try {
            books = JSON.parse(data);
        } catch (e) {
            res.sendStatus(500)
        }
        res.json(books)
    });
});

app.listen(process.argv[2]);