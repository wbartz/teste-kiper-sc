
module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
    logging: false
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql'
  }
}