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

exports.fetchN5Kanji = async () => {
    const response = await db.query(`SELECT * FROM kanji WHERE jlpt = $1`, [5])
    const { rows: n5_kanji } = await response;
    return n5_kanji;
}


