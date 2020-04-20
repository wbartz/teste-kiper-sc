const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const monitor = require('express-status-monitor');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'test') require('dotenv').config();

const app = express();

app.use(helmet());
app.use(monitor());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use((_, req, next) => {
  req.header('Access-Control-Allow-Origin', '*');
  req.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  next();
});

// routes
app.use('/api/v1', require('./routes/users'));
app.use('/api/v1/residents', require('./routes/residents'));
app.use('/api/v1/apartments', require('./routes/apartments'));

const swagger = require('express-swagger-generator')(app);
const options = {
  swaggerDefinition: {
    info: {
      description: 'API NextHouse',
      title: 'NextHouse',
      version: '1.0.0',
    },
    host: `http://localhost:${process.env.PORT}`,
    basePath: '/api/v1',
    produces: ['application/json'],
    schemes: ['http'],
  },
  basedir: __dirname,
  files: ['./src/routes/**/*.js', './src/database/models/*.js'],
};

swagger(options);

module.exports = app;
