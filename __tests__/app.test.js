const db = require('../db/connections');
const request = require('supertest');
const testData = require('../db/data/test-data/all_kanji_test');
const seed = require('../db/seeds/seed');
const app = require('../app');

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe('app', () => {
    it('Status: 404 - If the user tries to access an unknown path', () => {
        return request(app)
        .get('/api/unknown-path')
        .expect(404)
    });

    describe('GET /api', () => {
        it('Status: 200 - Sends back all of the Kanji in the database.', () => {
            return request(app)
            .get('/api')
            .expect(200)
            .then((kanjiData) => {
                const lengthOfKanjiData = kanjiData.length
                expect(kanjiData.length).toBe(lengthOfKanjiData)
            }
            )
        })
    })

    describe('GET /api/n5', () => {
        it.only('Status: 200 - Sends back an array of all of the JLPT N5 Kanji in the database', async () => {
            const response = await request(app).get('/api/n5').expect(200)
            const {n5_kanji} = await response;
            expect(n5_kanji).toHaveLength(5);
            expect(n5_kanji[0]).toEqual({
                kanji: "聞",
                 jlpt: 5,
                 meanings: "Hear,Ask,Listen",
                 readings_on: "ぶん,もん",
                 readings_kun: "き.く,き.こえる"
            })
        })
    })

})