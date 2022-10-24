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
            const { _body: n5_kanji } = await response;
            expect(n5_kanji).toHaveLength(5);
            n5_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 5
                })
            })
        })
    })

    describe('GET /api/n4', () => {
        it.only('Status: 200 - Sends back an array of all of the JLPT N4 Kanji in the database', async () => {
            const response = await request(app).get('/api/n4').expect(200)
            const { _body: n4_kanji } = await response;
            expect(n4_kanji).toHaveLength(5);
            n4_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 4
                })
            })
        })
    })

    describe('GET /api/n3', () => {
        it.only('Status: 200 - Sends back an array of all of the JLPT N3 Kanji in the database', async () => {
            const response = await request(app).get('/api/n3').expect(200)
            const { _body: n3_kanji } = await response;
            expect(n3_kanji).toHaveLength(5);
            n3_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 3
                })
            })
        })
    })

    describe('GET /api/n2', () => {
        it.only('Status: 200 - Sends back an array of all of the JLPT N2 Kanji in the database', async () => {
            const response = await request(app).get('/api/n2').expect(200)
            const { _body: n2_kanji } = await response;
            expect(n2_kanji).toHaveLength(5);
            n2_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 2
                })
            })
        })
    })

    describe('GET /api/n1', () => {
        it.only('Status: 200 - Sends back an array of all of the JLPT N1 Kanji in the database', async () => {
            const response = await request(app).get('/api/n1').expect(200)
            const { _body: n1_kanji } = await response;
            expect(n1_kanji).toHaveLength(5);
            n1_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 1
                })
            })
        })
    })


})