const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const monitor = require('express-status-monitor');
const swagger = require('express-swagger-generator');

const app = express();
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

app.use(helmet());
app.use(monitor());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((_, req, next) => {
  req.header('Access-Control-Allow-Origin', '*');
  req.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Types, Accept');
  next();
});

// routes
app.use('/api/v1', require('./routes/users'));

module.exports = app;