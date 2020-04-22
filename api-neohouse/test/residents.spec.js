const chai = require('./imports');
const app = require('../src/app');
const { Residents } = require('../src/database/models');

describe('Residents tests', () => {
  beforeEach((done) => {
    Residents.destroy({
      where: {
        email: 'teste@teste.com',
      },
    });
    done();
  });

  it('/api/v1/residents', () => {
    chai
      .request(app)
      .get('/api/v1/residents')
      .end((err, resp) => {
        chai.expect(resp).to.have.status(200);
        chai.expect(err).to.be.null;
        chai.expect(resp.body.type).to.be.equal('success');
      });
  });

  it('/api/v1/residents - add required fields', () => {
    chai
      .request(app)
      .post('/api/v1/residents')
      .send({
        full_name: 'teste',
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(200);
        chai.expect(resp.body.code).to.be.equal('required-fields');
      });
  });

  it('/api/v1/residents - add success', () => {
    chai
      .request(app)
      .post('/api/v1/residents')
      .send({
        full_name: 'teste',
        email: 'teste@teste.com',
        phone: '(99) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 1,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(201);
        chai.expect(resp.body.type).to.be.equal('success');
      });
  });

  it('/api/v1/residents - edit not found', () => {
    chai
      .request(app)
      .put('/api/v1/residents/6')
      .send({
        full_name: 'teste',
        email: 'teste@teste.com',
        phone: '(99) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 1,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(200);
        chai.expect(resp.body.code).to.be.equal('apartment-not-found');
      });
  });

  it('/api/v1/residents - edit success', () => {
    chai
      .request(app)
      .post('/api/v1/residents')
      .send({
        full_name: 'teste',
        email: 'teste@teste.com',
        phone: '(99) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 1,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(201);
        chai.expect(resp.body.type).to.be.equal('success');
        const apartment = resp.body.apartment.id;

        chai
          .request(app)
          .put(`/api/v1/residents/${apartment}`)
          .send({
            full_name: 'teste',
            email: 'teste@teste.com',
            phone: '(99) 9 9999 9999',
            cpf: '999.999.999-99',
            birthday: '30/01/1992',
            accountable: true,
            apartment_id: 1,
          })
          .end((err, resp) => {
            chai.expect(err).to.be.null;
            chai.expect(resp).to.have.status(200);
            chai.expect(resp.body.type).to.be.equal('success');
          });
      });
  });

  it('/api/v1/residents - delete', () => {
    chai
      .request(app)
      .post('/api/v1/residents')
      .send({
        full_name: 'teste',
        email: 'teste@teste.com',
        phone: '(99) 9 9999 9999',
        cpf: '999.999.999-99',
        birthday: '30/01/1992',
        accountable: true,
        apartment_id: 1,
      })
      .end((err, resp) => {
        chai.expect(err).to.be.null;
        chai.expect(resp).to.have.status(201);
        chai.expect(resp.body.type).to.be.equal('success');
        const apartment = resp.body.apartment.id;
        
        chai
          .request(app)
          .delete(`/api/v1/residents/${apartment}`)
          .end((err, resp) => {
            chai.expect(err).to.be.null;
            chai.expect(resp).to.have.status(200);
            chai.expect(resp.body.type).to.be.equal('success');
          });
      });

  });
});
