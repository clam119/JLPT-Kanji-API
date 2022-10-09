const fs = require('fs/promises')
const oldKanji = require('./allKanji.json');

const formattedKanji = oldKanji.map((oldKanji) => {
    const correctFormat = {};
    const { kanji, jlpt_new, meanings, readings_on, readings_kun } = oldKanji;
    correctFormat.kanji = kanji;
    correctFormat.jlpt = jlpt_new;
    correctFormat.meanings = meanings.toString();
    correctFormat.readings_on = readings_on.toString();
    correctFormat.readings_kun = readings_kun.toString();
    return correctFormat;
  })

const stringFormattedKanji = JSON.stringify(formattedKanji, null, 2);

fs.writeFile('./formattedAllKanji.json', stringFormattedKanji)
.then(() => console.log('Successfully formatted all of the kanji to desired format!'))
.catch((err) => console.log(err));