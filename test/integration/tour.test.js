const request = require('supertest');
const { app } = require('../../index');

describe('Tour API Tests', () => {

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


  it('should return a 500 status code for GET request to /tour/matches without pagination parameters', async () => {
    const response = await request(app).get('/tour/matches');
    expect(response.status).toBe(500);
  });
});