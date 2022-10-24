const express = require('express');
const app = express();
const { getAllKanji, getN5Kanji, getN4Kanji, getN3Kanji, getN2Kanji, getN1Kanji, getKanjiByID, getKanjiByChar } = require('./controllers/kanji.controller');

app.use(express.json());

app.get('/api', getAllKanji);
app.get('/api/:kanji_id', getKanjiByID)
app.get('/api/:kanji_char', getKanjiByChar)

app.get('/api/jlpt/n5', getN5Kanji);
app.get('/api/jlpt/n4', getN4Kanji);
app.get('/api/jlpt/n3', getN3Kanji);
app.get('/api/jlpt/n2', getN2Kanji);
app.get('/api/jlpt/n1', getN1Kanji);

app.use((err, req, res, next) => {
    if(err.status && err.msg) {
        res.status(err.status).send(err.msg);
    }
    else {
        next(err);
    }
})

app.all('/*', (req, res, next) => { 
    res.status(404).send({msg: 'path not found'});
})

app.use((err, req, res, next) => {
    if(err.code='22PO2') {
        console.log(err)
    }
})
app.use((err, req, res, next) => {
    console.log('App.js Error', err);
    res.status(500).send({msg: 'Internal Server Error - Please try again later!'});
})

module.exports = app;