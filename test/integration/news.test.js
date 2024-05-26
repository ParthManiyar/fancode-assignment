const request = require('supertest');
const { app } = require('../../index');

describe('News API tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('News api test', async () => {
    const response1 = await request(server).post('/news').send({"title": "test_match", "description": "test_match", "matchId": 1});
    expect(response1.status).toBe(201);

    const response2 = await request(server).post('/news').send({"title": "test_tour", "description": "test_tour", "tourId": 1});
    expect(response2.status).toBe(201);

    const response3 = await request(server).get('/matches/news').query({"matchId": 1})
    expect(response3.status).toBe(200);
    expect(response3.body).toContainEqual({"title": "test_match", "description": "test_match"});

    const response4 = await request(server).get('/matches/news').query({"tourId": 1})
    expect(response4.status).toBe(200);
    expect(response4.body).toContainEqual({"title": "test_tour", "description": "test_tour"});

    const response5 = await request(server).get('/matches/news').query({"sportId": 1})
    expect(response5.status).toBe(200);
    expect(response5.body).toContainEqual({"title": "test_tour", "description": "test_tour"});
    expect(response5.body).toContainEqual({"title": "test_match", "description": "test_match"});


  });

});