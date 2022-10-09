const db = require('../db/connections.js');

exports.fetchAllKanji = () => {
    return db
    .query(`SELECT * FROM kanji;`)
    .then(({rows: kanjiData}) => {
        return kanjiData;
    })
    .catch((err) => {
        return Promise.reject({status: 404, msg: 'path not found'})
    })
}


