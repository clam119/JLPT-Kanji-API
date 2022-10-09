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

})