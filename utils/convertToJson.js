const fs = require('fs/promises');
const allKanji = require('../allKanji');

fs.writeFile('./allKanji.json', JSON.stringify(allKanji, null, 2))
.then(() => console.log('Successfully JSON stringified!'))
