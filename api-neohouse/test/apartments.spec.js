const chai = require('./imports');
const app = require('../src/app');
const { Apartments } = require('../src/database/models');

describe('Apartments tests', () => {
  beforeEach((done) => {
    Apartments.destroy({
      where: {
        number: 10,
      },
    });
    done();
  });

  it('/api/v1/apartments', () => {
    chai
      .request(app)
      .get('/api/v1/apartments')
      .end((err, resp) => {
        chai.expect(resp).to.have.status(200);
        chai.expect(err).to.be.null;
        chai.expect(resp.body.type).to.be.equal('success');
      });
  });

  it('/api/v1/apartments - add required fields', () => {
    chai
      .request(app)
      .post('/api/v1/apartments')
      .send({
        number: 10,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(200);
        chai.expect(resp.body.code).to.be.equal('required-fields');
      });
  });

  it('/api/v1/apartments - add success', () => {
    chai
      .request(app)
      .post('/api/v1/apartments')
      .send({
        id: 6,
        number: 6,
        block_id: 1,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(201);
        chai.expect(resp.body.type).to.be.equal('success');
      });
  });

  it('/api/v1/apartments - edit not found', () => {
    chai
      .request(app)
      .put('/api/v1/apartments/6')
      .send({
        number: 6,
        block_id: 1,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(200);
        chai.expect(resp.body.code).to.be.equal('apartment-not-found');
      });
  });

  it('/api/v1/apartments - edit success', () => {
    chai
      .request(app)
      .post('/api/v1/apartments')
      .send({
        number: 10,
        block_id: 1,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(201);
        chai.expect(resp.body.type).to.be.equal('success');
        const apartment = resp.body.apartment.id;

        chai
          .request(app)
          .put(`/api/v1/apartments/${apartment}`)
          .send({
            number: 6,
            block_id: 1,
          })
          .end((err, resp) => {
            chai.expect(err).to.be.null;
            chai.expect(resp).to.have.status(200);
            chai.expect(resp.body.type).to.be.equal('success');
          });
      });
  });

  it('/api/v1/apartments - delete', () => {
    chai
      .request(app)
      .post('/api/v1/apartments')
      .send({
        number: 10,
        block_id: 1,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(201);
        chai.expect(resp.body.type).to.be.equal('success');
        const apartment = resp.body.apartment.id;
        
        chai
          .request(app)
          .delete(`/api/v1/apartments/${apartment}`)
          .end((err, resp) => {
            chai.expect(err).to.be.null;
            chai.expect(resp).to.have.status(200);
            chai.expect(resp.body.type).to.be.equal('success');
          });
      });

  });
});
