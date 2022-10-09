const { fetchAllKanji } = require('../models/kanji.model.js');

exports.getAllKanji = (req, res, next) => {
    fetchAllKanji()
    .then((kanjiData => {
        res.status(200).send(kanjiData);
    })
)}

