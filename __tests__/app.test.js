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
        .then(({ body }) => {
            expect({ msg }).toBe('path not found');
        })
    });
})