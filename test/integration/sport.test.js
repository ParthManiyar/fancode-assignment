const request = require('supertest');
const { app } = require('../../index');

describe('Sport API tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });


  it('Test added fields are present', async () => {
    const response = await request(server).get('/sport/tour/match');
    expect(response.status).toBe(200);
    for (const [key, value] of Object.entries(response.body)) {
        for (const [k, v] of Object.entries(value)){
            v.forEach((match) => {
                expect(match).toHaveProperty('id'); 
                expect(match).toHaveProperty('startTime');
                expect(match).toHaveProperty('format');
            })
        }
      }
  });

});