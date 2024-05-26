const request = require('supertest');
const { app } = require('../../index');

describe('Tour API tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return a error for GET request to /tour/matches without pagination parameters', async () => {
    const response = await request(server).get('/tour/matches');
    expect(response.status).toBe(500);
  });

  it('Test getting number of records as per the pagination paramters', async () => {
    const response = await request(server).get('/tour/matches').query({"name": "Indian Premier League, 2023", "pageSize": 2, "pageNumber": 1});
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });

});