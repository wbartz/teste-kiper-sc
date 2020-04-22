const chai = require('chai');
const http = require('chai-http');
const subSet = require('chai-subset');

chai.use(http);
chai.use(subSet);

module.exports = chai;