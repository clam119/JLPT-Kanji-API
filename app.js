const express = require('express');
const app = express();
const { getAllKanji, getN5Kanji } = require('./controllers/kanji.controller');

app.use(express.json());

app.get('/api', getAllKanji);

app.get('/api/n5', getN5Kanji);

app.use((err, req, res, next) => {
    if(!err.status && err.msg) {
        res.status(err.status).send(err.msg);
    }
    else {
        next(err);
    }
})
app.use((err, req, res, next) => {
    console.log('App.js Error', err);
    res.status(500).send({msg: 'Internal Server Error - Please try again later!'});
})

module.exports = app;