const chai = require('./imports');
const app = require('../src/app');

describe('User tests', () => {
  it('/api/v1/login - required fields', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({})
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(401);
        chai.expect(resp.body.code).to.be.equal('required-fields');
      });
  });

  it('/api/v1/login - user not found', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: 'admin@neohouse.com',
        password: 'neohouse@',
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(401);
        chai.expect(resp.body.code).not.to.be.equal('user-not-found');
      });
  });

  it('/api/v1/login - success', () => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send({
        email: 'admin@neohouse.com',
        password: 'neohouse',
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(200);
        chai.expect(resp.body).not.to.be.empty;
      });
  });
});
