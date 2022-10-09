const data = require("../db/data/development-data/jlpt_kanji/all_kanji");

const fs = require("fs/promises");

const kanjiSplitter = (jlptNumber) => {
  const testData = data.filter((kanji) => {
    return kanji.jlpt === jlptNumber;
  });

  const lastFiveKanji = testData.splice(-5);

  fs.writeFile(
    `./jlpt_n${jlptNumber}.js`,
    JSON.stringify(lastFiveKanji, null, 2)
  )
    .then(() =>
      console.log(
        `Successfully created five entries of JLPT N${jlptNumber} Kanji!`
      )
    )
    .catch((err) => console.log("An error has occurred - ", err));
};
