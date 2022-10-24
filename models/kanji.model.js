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

exports.fetchN4Kanji = async () => {
    const response = await db.query(`SELECT * FROM kanji WHERE jlpt = $1`, [4])
    const { rows: n4_kanji } = await response;
    return n4_kanji;
}

exports.fetchN3Kanji = async () => {
    const response = await db.query(`SELECT * FROM kanji WHERE jlpt = $1`, [3])
    const { rows: n3_kanji } = await response;
    return n3_kanji;
}

exports.fetchN2Kanji = async () => {
    const response = await db.query(`SELECT * FROM kanji WHERE jlpt = $1`, [2])
    const { rows: n2_kanji } = await response;
    return n2_kanji;
}

exports.fetchN1Kanji = async () => {
    const response = await db.query(`SELECT * FROM kanji WHERE jlpt = $1`, [1])
    const { rows: n1_kanji } = await response;
    return n1_kanji;
}


