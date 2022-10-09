const db = require("../connections");
const format = require("pg-format");
const devData = require('../data/development-data/all_kanji');

const seed = (data) => {
  return db
    .query(`DROP TABLE IF EXISTS kanji`)
    .then(() => console.log("Dropped all tables"))

    .then(() =>
      db.query(`CREATE TABLE kanji (
      kanji_id SERIAL PRIMARY KEY, 
      kanji VARCHAR(20) NOT NULL, 
      jlpt INT, 
      meanings TEXT NOT NULL, 
      reading_on VARCHAR(250) NOT NULL, 
      reading_kun VARCHAR(250) NOT NULL 
      );`)
    )

    .then(() => {
      const formattedKanjiData = data.map((kanji) => Object.values(kanji));
      const queryString = format(`INSERT INTO kanji (kanji, jlpt, meanings, reading_on, reading_kun) VALUES %L;`, formattedKanjiData);
      return db.query(queryString)
      .then(() => console.log(`Successfully inserted ${formattedKanjiData.length} rows into the table`));
    });

};

module.exports = seed;
