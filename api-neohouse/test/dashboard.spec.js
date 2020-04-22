const chai = require('./imports');
const app = require('../src/app');

describe('Dashboard tests', () => {
  it('/api/v1/dashboard', () => {
    chai
      .request(app)
      .get('/api/v1/dashboard')
      .end((err, resp) => {
        chai.expect(resp).to.have.status(200);
        chai.expect(err).to.be.null;
        chai.expect(resp.body.length).to.be.gt(0);
      });
  });
});
