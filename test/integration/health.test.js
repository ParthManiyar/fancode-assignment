const request = require('supertest');
const { app } = require('../../index');

describe('Integration Tests', () => {

  let server;
  let port = 3000;

  beforeAll(done => {
    server = app.listen(port, () => {
      console.log(`Test server running on port ${port}`);
      done();
    });
  });

  afterAll(done => {
    server.close(done);
  });


  it('should return a 200 OK status code for GET request to /health', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });
});