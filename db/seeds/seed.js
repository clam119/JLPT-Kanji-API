const db = require("../connections");
const format = require("pg-format");

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
      const formattedKanjiData = devData.map((kanji) => Object.values(kanji));
      formattedKanjiData.forEach((kanji) => {
        const singleQuery = format(
          `INSERT INTO kanji (kanji, jlpt, meanings, reading_on, reading_kun) VALUES (%L);`,
          kanji
        );
        return db
          .query(singleQuery)
          .then(() => console.log(`Finished inserting ${kanji.kanji}.`));
      });
    });
};

seed();
module.exports = seed;
