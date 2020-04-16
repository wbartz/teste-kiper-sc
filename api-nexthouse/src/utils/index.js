const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { HASH_KEY } = process.env;
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOGGER_LEVEL || 'info',
  format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'logger.log',
    }),
  ],
});

module.exports = {
  alert: message => {
    const date = new Date();
    logger.warn(`[ERROR: ${date.toISOString()}] - ${message}`);
  },
  authenticated: (req, res, next) => {
    const token = req.headers['Authorization'];

    if (!token)
      return res.status(401).send({
        type: 'error',
        code: 'no-token',
      });

    jwt.verify(token, HASH_KEY, (error, decoded) => {
      if (error) {
        this.alert(`token verify - ${error}`);
        return res.status(401).send({
          type: 'error',
          code: 'authentication-failed',
        });
      }

      req.use = decoded.id;
      next();
    });
  },
  createToken: (user) => {
    return jwt.sign({ id: user.id }, HASH_KEY, {
      expiresIn: 3600,
    });
  },
  hashPassword: (password) => {
    return crypto.createHmac('sha256', HASH_KEY).update(password).digest('hex');
  },
};
