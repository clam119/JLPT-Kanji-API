const { fetchAllKanji, fetchN5Kanji } = require('../models/kanji.model.js');

exports.getAllKanji = (req, res, next) => {
    fetchAllKanji()
    .then((kanjiData => {
        res.status(200).send(kanjiData);
    })
)}

exports.getN5Kanji = (req, res, next) => {
    fetchN5Kanji()
    .then((n5KanjiData) => {
        res.status(200).send(n5KanjiData);
    })
}
