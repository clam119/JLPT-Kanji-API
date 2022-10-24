const { fetchAllKanji, fetchKanjiByID, fetchKanjiByChar, fetchN5Kanji, fetchN4Kanji, fetchN3Kanji, fetchN2Kanji, fetchN1Kanji } = require('../models/kanji.model.js');

exports.getAllKanji = (req, res, next) => {
    fetchAllKanji()
    .then((kanjiData => {
        res.status(200).send(kanjiData);
    })
)}

exports.getKanjiByID = (req, res, next) => {
    const { kanji_id } = req.params;
    fetchKanjiByID(kanji_id)
    .then((requestedKanji) => {
        res.status(200).send(requestedKanji);
    })
    .catch(next)
}

exports.getKanjiByChar = (req, res, next) => {
    const { kanji_char} = req.params;
    fetchKanjiByChar(kanji_char)
    .then((requestedKanji) => {
        res.status(200).send(requestedKanji);
    })
    .catch(next)
}
exports.getN5Kanji = (req, res, next) => {
    fetchN5Kanji()
    .then((n5KanjiData) => {
        res.status(200).send(n5KanjiData);
    })
    .catch(next)
}

exports.getN4Kanji = (req, res, next) => {
    fetchN4Kanji()
    .then((n4KanjiData) => {
        res.status(200).send(n4KanjiData);
    })
    .catch(next)
}

exports.getN3Kanji = (req, res, next) => {
    fetchN3Kanji()
    .then((n3KanjiData) => {
        res.status(200).send(n3KanjiData);
    })
    .catch(next)
}

exports.getN2Kanji = (req, res, next) => {
    fetchN2Kanji()
    .then((n2KanjiData) => {
        res.status(200).send(n2KanjiData);
    })
    .catch(next)
}

exports.getN1Kanji = (req, res, next) => {
    fetchN1Kanji()
    .then((n1KanjiData) => {
        res.status(200).send(n1KanjiData);
    })
    .catch(next)
}


