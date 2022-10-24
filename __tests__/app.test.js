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
        .get('/api/oops/unknown-path')
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

    describe('GET /api/id/:kanji_id', () => {
        it('Status: 200 - Sends back the Kanji requested by the user if passed in valid ID', async () => {
            const response = await request(app).get('/api/id/1').expect(200)
            const { _body: requestedKanji } = await response;
            expect(Object.keys(requestedKanji)).toHaveLength(6)
            expect(requestedKanji).toMatchObject({
                kanji_id: 1,
                kanji: "聞",
                jlpt: 5,
                meanings: "Hear,Ask,Listen",
            })
        })

        it('Status: 200 - Sends back the Kanji requested by the user if passed in valid ID', async () => {
            const response = await request(app).get('/api/id/2').expect(200)
            const { _body: requestedKanji } = await response;
            expect(Object.keys(requestedKanji)).toHaveLength(6)
            expect(requestedKanji).toMatchObject({
                kanji_id: 2,
                kanji: "語",
                jlpt: 5,
                meanings: "Word,Speech,Language",
            })
        })

        it('Status: 400 - Should respond back with a bad request if passed in a non-number as an ID', async () => {
            const response = await request(app).get('/api/id/notValidIDType').expect(400);
            const { text: msg } = await response;
            expect(msg).toBe('Invalid Data Type');
        })

        it('Status : 404 - Should respond back with an error 404 and a message saying that the Kanji with that ID cannot be found', async () => {
            const response = await request(app).get('/api/id/3330000').expect(404)
            const { text: msg } = await response;
            expect(msg).toBe('Kanji not found');
        })
    })

    describe('GET /api/jlpt/n5', () => {
        it('Status: 200 - Sends back an array of all of the JLPT N5 Kanji in the database', async () => {
            const response = await request(app).get('/api/jlpt/n5').expect(200)
            const { _body: n5_kanji } = await response;
            expect(n5_kanji).toHaveLength(5);
            n5_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 5
                })
            })
        })
    })

    describe('GET /api/jlpt/n4', () => {
        it('Status: 200 - Sends back an array of all of the JLPT N4 Kanji in the database', async () => {
            const response = await request(app).get('/api/jlpt/n4').expect(200)
            const { _body: n4_kanji } = await response;
            expect(n4_kanji).toHaveLength(5);
            n4_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 4
                })
            })
        })
    })

    describe('GET /api/jlpt/n3', () => {
        it('Status: 200 - Sends back an array of all of the JLPT N3 Kanji in the database', async () => {
            const response = await request(app).get('/api/jlpt/n3').expect(200)
            const { _body: n3_kanji } = await response;
            expect(n3_kanji).toHaveLength(5);
            n3_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 3
                })
            })
        })
    })

    describe('GET /api/jlpt/n2', () => {
        it('Status: 200 - Sends back an array of all of the JLPT N2 Kanji in the database', async () => {
            const response = await request(app).get('/api/jlpt/n2').expect(200)
            const { _body: n2_kanji } = await response;
            expect(n2_kanji).toHaveLength(5);
            n2_kanji.forEach((kanji) => {
                expect(kanji).toMatchObject({
                    jlpt: 2
                })
            })
        })
    })

    describe('GET /api/jlpt/n1', () => {
        it('Status: 200 - Sends back an array of all of the JLPT N1 Kanji in the database', async () => {
            const response = await request(app).get('/api/jlpt/n1').expect(200)
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