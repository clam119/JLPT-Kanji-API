const devData = require('../data/development-data/all_kanji.js');
const seed = require('./seed');
const db = require('../connections.js');

const runSeed = () => {
    return seed(devData).then(() => {db.end()});
}

runSeed();
